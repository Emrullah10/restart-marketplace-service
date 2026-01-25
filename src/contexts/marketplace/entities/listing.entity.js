class ListingEntity {
  constructor({ id, userId, title, description, category, price, status, imageUrl, location, createdAt }) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.status = status || 'active';
    this.imageUrl = imageUrl;
    this.location = location;
    this.createdAt = createdAt || new Date();
  }

  validate() {
    if (!this.title) throw new Error('Title is required');
    if (this.price < 0) throw new Error('Price cannot be negative');
  }
}

module.exports = ListingEntity;
