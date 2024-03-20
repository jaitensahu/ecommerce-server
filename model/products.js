const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  discountPercentage: {
    type: String,
  },
  rating: {
    type: String,
  },
  stock: {
    type: String,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  images: {
    type: Array,
  },
});

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;
