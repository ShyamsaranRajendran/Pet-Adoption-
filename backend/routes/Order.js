const express = require("express");
const router = express.Router();
const mongoose = require('mongoose'); // Ensure mongoose is imported
const Order = require("../models/order.js");

router.get('/all', async (req, res) => {
  try {
    const orderData = await Order.find({});
    
    res.status(201).send({ message: 'Orders sent successfully!', orders: orderData });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).send({ error: 'Failed to send order data' });
  }
});

// Exports 
module.exports = router;
