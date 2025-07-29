const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventory');

router.get('/inventory', inventoryController.getInventory); // Existing classification listing route
router.get('/inventory/vehicle/:id', inventoryController.getVehicleDetail); // New detail route

module.exports = router;