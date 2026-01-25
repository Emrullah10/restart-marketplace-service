class MarketplaceController {
  constructor({ getProductsUseCase }) {
    this.getProductsUseCase = getProductsUseCase;
  }

  async getProducts(req, res) {
    try {
      const products = await this.getProductsUseCase.execute();
      res.json(products);
    } catch (error) {
      console.error('Marketplace Controller Error:', error.message);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  }
}

module.exports = MarketplaceController;
