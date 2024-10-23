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
    min: 0 // Price should be a non-negative number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const PetProduct = mongoose.model("PetProduct", petProductSchema);

module.exports = PetProduct;
