const express = require('express');
const router = express.Router();
const AdoptionRequest = require('../models/adoptionreq.js');


router.get('/all', async (req, res) => {
  try {
    const requests = await AdoptionRequest.find({});
    res.status(200).send(requests);
  } catch (error) {
    console.error('Error fetching adoption requests:', error);
    res.status(500).send({ error: 'Failed to fetch adoption requests' });
  }
});


module.exports = router;
