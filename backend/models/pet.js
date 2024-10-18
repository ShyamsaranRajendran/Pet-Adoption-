const mongoose = require('mongoose');

// Define the schema for the pet data
const petSchema = new mongoose.Schema({
  ID: {
    type: Number, // Use Number for integer values
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number, 
    required: true
  },
  sex: {
    type: String,
    enum: ['male', 'female'], 
    required: true
  },
  breed: {
    type: String,
    default: 'Unknown Mix'
  },
  date_found: {
    type: Date,
    required: true
  },
  adoptable_from: {
    type: Date,
    required: true
  },
  posted: {
    type: Date,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  coat: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  neutered: {
    type: String,
    enum: ['yes', 'no'],
    required: true
  }
});

// Create the model from the schema
const Pet = mongoose.model('pet', petSchema); // Change 'pets' to 'pet' to match the collection name

module.exports = Pet;
