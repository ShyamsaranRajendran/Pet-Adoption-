const express = require("express");
const router = express.Router();
const petFood = require("../models/PetFood.js");

router.get('/all', async (req, res) => {
  try {
    console.log("Fetching all pet products...");
        const petFoodData = await petFood.find({});
    
    res.status(200).send({ message: 'Pet products fetched successfully!', PetFood: petFoodData });
  } catch (error) {
    console.error('Error fetching pet products:', error);
    res.status(500).send({ error: 'Failed to fetch pet products data' });
  }
});


// Fetch quantity of pet food products
router.get('/quantity', async (req, res) => {
  try {
    console.log("Fetching pet products quantity...");
    const petFoodData = await petFood.find({});
    
    // Assuming you want to return total quantities or any other logic
    const quantityData = petFoodData.map(product => ({
      name: product.name,
      quantity: product.qty // Adjust according to your model
    }));

    res.status(200).send({ message: 'Pet products quantity fetched successfully!', quantities: quantityData });
  } catch (error) {
    console.error('Error fetching pet products quantity:', error);
    res.status(500).send({ error: 'Failed to fetch pet products quantity' });
  }
});

module.exports = router;
