const productService = require("../service/product.service");

const createProduct = async (req, res) => {
  try {
    const createdProduct = await productService.createProduct(req.body);
    res.status(201).json({
      success: true,
      message: "Product Successfully created",
      data: createdProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: error.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProduct();
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve products",
      error: error.message,
    });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const product = await productService.getOneProduct(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product Retrieved Successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Invalid ID",
      error: error.message,
    });
  }
};

const updateProductPut = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProductPut(
      req.params.id,
      req.body,
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedProduct,
      message: "Product Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Update Product",
      error: error.message,
    });
  }
};

const updateProductPatch = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProductPatch(
      req.params.id,
      req.body,
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product Updated Successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Update Product",
      error: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productService.deleteProduct(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product Deleted",
      data: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Update Product",
      error: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProductPut,
  updateProductPatch,
  deleteProduct,
};
