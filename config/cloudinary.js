const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "z17gchp5",
    api_key:"238271614221563",
    api_secret: "4oPoNdOUfc7QQN8cOp-h2gkcZTM"
});

module.exports = cloudinary;