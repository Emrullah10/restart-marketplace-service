const ProductEntity = require('../../contexts/marketplace/entities/product.entity');
const db = require('../../../packages/modules/datasource');

class MarketplaceRepositoryImplementation {
  async findAll() {
    const result = await db.query('SELECT * FROM products WHERE is_available = true ORDER BY created_at DESC');
    return result.rows.map(row => new ProductEntity({
      id: row.id,
      sellerId: row.seller_id,
      title: row.title,
      description: row.description,
      category: row.category,
      price: row.price,
      rating: row.rating,
      location: row.location,
      imageUrl: row.image_url,
      isAvailable: row.is_available,
      createdAt: row.created_at
    }));
  }

  async findAllListings() {
    const result = await db.query('SELECT * FROM listings ORDER BY created_at DESC');
    return result.rows.map(row => ({
      id: row.id,
      userId: row.user_id,
      title: row.title,
      description: row.description,
      price: row.price,
      status: row.status,
      imageUrl: row.image_url,
      createdAt: row.created_at
    }));
  }
}

module.exports = MarketplaceRepositoryImplementation;
