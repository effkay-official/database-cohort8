const productModel = require('../model/productModel');

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, description, quantity, stock, category } = req.body;
    // multer-storage-cloudinary-v2 already uploads the file and sets req.file.path to the secure URL
    const imageUrl = req.file ? req.file.path : null;
    if (!imageUrl) {
      return res.status(400).json({ message: 'Image is required' });
    }
    const product = new productModel({
      name,
      price,
      description,
      image: imageUrl,
      quantity,
      stock,
      category,
    });
    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single product by ID
const getSingleProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { name, price, description, quantity, stock, category } = req.body;
    const updateData = { name, price, description, quantity, stock, category };
    if (req.file) {
      updateData.image = req.file.path;
    }
    const product = await productModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};