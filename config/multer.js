// config/multer.js
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary-v2'); // Changed this line
const cloudinary = require('./cloudinary'); // Your Cloudinary config file

const storage = new CloudinaryStorage({
  cloudinary: cloudinary, // Pass your configured cloudinary instance
  params: {
    folder: 'products',
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

const upload = multer({ storage: storage });

module.exports = upload;