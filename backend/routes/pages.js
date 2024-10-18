const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user.js");
const mailer = require("../utils/mailer.js")
const Application=require('../models/application.js')
router.post('/applications', async (req, res) => {
  try {
    const applicationData = new Application(req.body);
    await applicationData.save();
    res.status(201).send({ message: 'Application saved successfully!' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to save application data' });
  }
});

//Exports 
module.exports=router;