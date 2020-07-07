const express = require("express");
const router = express.Router();
const inventoryData = require("../data/inventory.json");
// const { route } = require("./warehouse");

//Get Single Inventory Item
router.get("/:id", (req, res) => {
	const found = inventoryData.some((item) => item.id === req.params.id);

	if (found) {
		res.json(inventoryData.filter((item) => item.id === req.params.id));
	} else {
		res.status(404).json({ msg: `No item with ID o ${req.params.id}` });
	}
});

//Get All Inventory Items

router.get("/", (req, res) => res.json(inventoryData));

module.exports = router;
