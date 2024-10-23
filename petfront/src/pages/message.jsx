import React, { useEffect, useState } from "react";

const Message = () => {
  const [users, setUsers] = useState([]);
  const [emailData, setEmailData] = useState({ to: "", subject: "", text: "" });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/user/all");
        const data = await response.json();
        setUsers(data.Users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEmailSend = async () => {
    // Send the email using the form data
    try {
      const response = await fetch("http://localhost:5000/user/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message); // Show success message
        // Clear the email data after sending
        setEmailData({ to: "", subject: "", text: "" });
      } else {
        alert(`Error: ${result.error}`); // Show error message
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h1>User List</h1>
      <div className="user-cards">
        {users.length > 0 ? (
          users.map((user) => (
            <div className="user-card" key={user._id}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
              <button
                onClick={() => {
                  setEmailData({ ...emailData, to: user.email });
                }}
              >
                Prepare Email
              </button>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>

      <div className="email-form">
        <h2>Send a Customized Email</h2>
        <input
          type="email"
          name="to"
          placeholder="Recipient Email"
          value={emailData.to}
          onChange={handleChange}
          disabled
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={emailData.subject}
          onChange={handleChange}
        />
        <textarea
          name="text"
          placeholder="Email Body"
          value={emailData.text}
          onChange={handleChange}
        ></textarea>
        <button onClick={handleEmailSend}>Send Email</button>
      </div>
    </div>
  );
};

export default Message;
