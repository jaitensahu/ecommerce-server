const productModel = require("../model/products");

createProduct = async (req, res) => {
  try {
    let newProduct = await productModel.create({ ...req.body });
    newProduct.save();
    res.status(200).json({
      success: true,
      message: "Product Created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "Product Created successfully",
    });
  }
};
updateProduct = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Product Updated successfully",
  });
};

deleteProduct = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Product Deleted successfully",
  });
};
getAllProducts = async (req, res) => {
  let data = await productModel.find();
  try {
    res.status(200).json({
      status: true,
      message: "All Products",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      success: true,
      message: "SomeThing Went Wrong",
    });
  }
};
const product = { createProduct, updateProduct, deleteProduct, getAllProducts };
module.exports = product;
