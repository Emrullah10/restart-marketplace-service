const express = require('express');

function createMarketplaceRoutes({ marketplaceController }) {
  const router = express.Router();

  router.get('/products', (req, res) => marketplaceController.getProducts(req, res));

  return router;
}

module.exports = createMarketplaceRoutes;
