const express = require('express');
const router = express.Router();
const warehouseData = require('../data/warehouses.json');

// Get request for ALL warehouse

router.get('/', (req, res) => {
  res.json(warehouseData);
})



// Post creating a new warehouse 

router.post('/', (req, res) => {
  if (!req.body.name || !req.body.address.street || !req.body.address.location || !req.body.contact.name || !req.body.contact.position || !req.body.contact.phone || !req.body.contact.email) {
    res.status(400).json({ message: 'Unable to POST' });
  } else {
    warehouseData.push({
      id: Date.now().toString(),
      name: req.body.name,
      address: {
        street: req.body.address.street,
        location: req.body.address.location
      },
      contact: {
        name: req.body.contact.name,
        position: req.body.contact.position,
        phone: req.body.contact.phone,
        email: req.body.contact.email
      },
      inventoryCategories: "Paper, Crafts, Office supplies"
    })
  }
  res.json(warehouseData)
})

module.exports = router;


