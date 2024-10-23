const mongoose = require("mongoose");

const petProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  qty: {
    type: Number,
    required: true,
    min: 1 
  },
  price: {
    type: Number,
    required: true,
    min: 0 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const PetProduct = mongoose.model("PetFood", petProductSchema);

module.exports = PetProduct;
