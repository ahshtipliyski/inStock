const express = require('express');
const router = express.Router();
const warehouseData = require('../data/warehouses.json');

// Get request for ALL warehouse

router.get('/' , (req, res) => {
    res.json(warehouseData);
})

module.exports = router;