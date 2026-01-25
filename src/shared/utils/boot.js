const MarketplaceRepositoryImplementation = require('../../infrastructure/persistence/marketplace.repository-implementation');
const GetProductsUseCase = require('../../application/use-cases/get-products.use-case');
const MarketplaceController = require('../../interfaces/controllers/marketplace.controller');
const createMarketplaceRoutes = require('../../../routes/marketplace.routes');

function bootstrap() {
  const marketplaceRepository = new MarketplaceRepositoryImplementation();
  const getProductsUseCase = new GetProductsUseCase({ productRepository: marketplaceRepository });
  const marketplaceController = new MarketplaceController({ getProductsUseCase });
  const marketplaceRoutes = createMarketplaceRoutes({ marketplaceController });

  return { marketplaceRoutes };
}

module.exports = bootstrap;
