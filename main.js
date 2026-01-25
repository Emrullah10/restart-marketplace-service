const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bootstrap = require('./src/shared/utils/boot');

const app = express();
app.use(cors());
app.use(express.json());

const { marketplaceRoutes } = bootstrap();

app.use('/api/marketplace', marketplaceRoutes);

app.get('/', (req, res) => {
  res.send('ReStart Marketplace Service - Clean Architecture');
});

const PORT = process.env.MARKETPLACE_PORT || 3003;
app.listen(PORT, () => {
    console.log(`Marketplace Service ${PORT} portunda çalışıyor.`);
});
