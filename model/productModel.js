const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
  stock: { type: Number, default: 0 },   // changed from Boolean to Number
  category: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);