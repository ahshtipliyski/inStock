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

//Add new inventory item


router.post('/', (req, res) => {
	if (!req.body.name || !req.body.lastOrdered || !req.body.city || !req.body.country || !req.body.quantity || !req.body.isInstock || !req.body.description) {
		res.status(400).json({ err: "All fields need to be filled" });
	} else {
		inventoryData.push({
			id: Date.now().toString(),
			name: req.body.name,
			lastOrdered: req.body.lastOrdered,
			city: req.body.city,
			country: req.body.country,
			quantity: req.body.quantity,
			isInstock: req.body.isInstock,
			description: req.body.description
		})
	}
	res.json(inventoryData)
})

module.exports = router;
