const Product = require("../models/product.model");

const createProduct = async (productData) => await Product.create(productData);

const getAllProduct = async () => await Product.find();

const getOneProduct = async (id) => await Product.findById(id);

const updateProductPut = async (id, data) => {
  return await Product.findOneAndReplace({ _id: id }, data, {
    new: true,
    runValidators: true,
  });
};

const updateProductPatch = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

const deleteProduct = async (id) => await Product.findByIdAndDelete(id);

module.exports = {
  createProduct,
  getAllProduct,
  getOneProduct,
  updateProductPut,
  updateProductPatch,
  deleteProduct,
};
