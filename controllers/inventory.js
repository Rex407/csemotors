const inventoryModel = require('../models/inventory-model');

const inventoryController = {
  getInventory(req, res) {
    res.render('inventory/index', {
      title: 'Vehicle Inventory by Classification',
    });
  },

  getVehicleDetail(req, res) {
    const vehicleId = req.params.id;
    const vehicle = inventoryModel.getVehicleById(vehicleId);
    if (vehicle) {
      res.render('inventory/vehicle-detail', {
        title: `${vehicle.inventory_make} ${vehicle.inventory_model} Details`,
        vehicle,
      });
    } else {
      res.status(404).send('Vehicle not found');
    }
  },
};

module.exports = inventoryController;