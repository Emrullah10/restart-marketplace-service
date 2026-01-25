class ProductEntity {
  constructor({ id, sellerId, title, description, category, price, rating, location, imageUrl, isAvailable, createdAt }) {
    this.id = id;
    this.sellerId = sellerId;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.rating = rating || 0;
    this.location = location;
    this.imageUrl = imageUrl;
    this.isAvailable = isAvailable !== undefined ? isAvailable : true;
    this.createdAt = createdAt || new Date();
  }

  validate() {
    if (!this.title) throw new Error('Product title is required');
    if (this.price < 0) throw new Error('Product price cannot be negative');
  }
}

module.exports = ProductEntity;
