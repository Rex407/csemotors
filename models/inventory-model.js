const inventory = [
  {
    inv_id: 1,
    inv_make: 'DMC',
    inv_model: 'DeLorean',
    inv_year: 1981,
    inv_price: 65000.00,
    inv_mileage: 123456,
    inv_description: 'A classic time-traveling vehicle with gull-wing doors.',
    inv_image: 'delorean-full.jpg',
    classification_id: 1,
  },
  // Add more vehicles as needed
];

const inventoryModel = {
  getInventoryByClassification(classificationId) {
    return inventory.filter(vehicle => vehicle.classification_id === parseInt(classificationId));
  },

  getVehicleById(id) {
    return inventory.find(vehicle => vehicle.inv_id === parseInt(id)) || null;
  },
};

module.exports = inventoryModel;