const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user.js");
const mailer = require("../utils/mailer.js");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "SHY23FDA45G2G1K89KH5sec4H8KUTF85ret";

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { name, email, username, password, phoneNumber } = req.body;

    // Log the incoming request data
    console.log("Incoming registration data:", req.body);

    // Check if the email already exists
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res.status(400).json({ error: 'Email already exists, please use another.' });
    }
    
    

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      username,
      password: hash,
      phoneNumber,
      admin: 0,
    });
    await newUser.save();

    await mailer(
      email,
      "Registration Successful",
      "Welcome to the Pet Adoption Platform! Please confirm your registration by logging in."
    );

    res.json({ success: "You will receive an email notification." });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        username: user.username,
        phoneNumber: user.phoneNumber,
      },
      token,
      status: user.admin
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Logout user
router.get("/logout", (req, res) => {
  res.json({ message: "You are logged out!" });
});

// Get user information
router.get("/get-user", (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    const userId = decoded.userId;
    User.findById(userId)
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        res.json({ user });
      })
      .catch(error => {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  });
});

// Forgot password
router.post("/forgot-password", async (req, res) => {
  try {
    console.log('reached');
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const OTP = generateOTP();
    await mailer(
      email,
      "Password Reset OTP",
      `Your OTP for password reset is: ${OTP}`,
      `Your OTP for password reset is: <b>${OTP}</b>`
    );

    // Generate JWT token with email and OTP
    const token = jwt.sign({ email, OTP }, JWT_SECRET, { expiresIn: "15m" });
    res.json({ token });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
});

// Verify OTP for password reset
router.post("/verify-otp", async (req, res) => {
  try {
    const { OTP, token } = req.body;

    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.OTP !== parseInt(OTP)) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "OTP verified. You can now reset your password." });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    if (error.name === "TokenExpiredError" || error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Reset password
router.post("/reset-password", async (req, res) => {
  try {
    const { newPassword, token } = req.body;

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);
    user.password = hash;
    await user.save();
    res.json({ message: "Password reset successfully. Please log in again." });
  } catch (error) {
    console.error("Error resetting password:", error);
    if (error.name === "TokenExpiredError" || error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const users = await User.find({});
    res.json({ message: "Data sent", Users: users });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/email", async (req, res) => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await mailer(to, subject, text);
    console.log("Email sent")
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;
