const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5555;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);

const mongoURI = process.env.COMPASS_STRING || process.env.ATLAS_STRING;
if (!mongoURI) {
  console.error('MongoDB connection string is missing. Set COMPASS_STRING or ATLAS_STRING in .env');
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => console.log(`Server running on port ${port}`));