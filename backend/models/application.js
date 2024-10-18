const mongoose = require('mongoose');

// Define the application schema
const applicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true, // Ensure this field is required
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    match: /.+\@.+\..+/ // Basic regex for validating email format
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  homeType: {
    type: String,
    required: true,
    enum: ['apartment', 'house', 'farm'], // Restrict to specified values
  },
  petType: {
    type: String,
    required: true,
    enum: ['dog', 'cat', 'bird'], // Restrict to specified values
  },
  experience: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
    default: '', // Default value if not provided
  },
});

// Create the Application model
const Application = mongoose.model('Application', applicationSchema);

// Export the Application model
module.exports = Application;
