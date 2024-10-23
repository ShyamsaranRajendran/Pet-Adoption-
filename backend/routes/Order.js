const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user.js");
const mailer = require("../utils/mailer.js")
const Order=require('../models/order.js')
router.post('/orders', async (req, res) => {
  try {
    const orderData = await Order.find({});
    res.status(201).send({ message: 'order sent successfully!', Order:orderData });
  } catch (error) {
    res.status(500).send({ error: 'Failed to send order data' });
  }
});

//Exports 
module.exports=router;