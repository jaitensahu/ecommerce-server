const express = require("express");
const mongoose = require("mongoose");
const  auth  = require("../middleware/product");
const productRoutes = express.Router();
const { createProduct, updateProduct, deleteProduct } = require('../controller/products');
productRoutes.post("/create",auth(["admin", "seller"]), createProduct);
productRoutes.post("/update",auth(["admin", "seller"]), updateProduct);
productRoutes.post("/delete", auth(["admin", "seller"]),deleteProduct);
productRoutes.get("/",auth(["admin", "seller", "customer", "buyer"]), getAllProducts);

module.exports = productRoutes;
