const express = require("express");
const productRoute = express.Router();
const {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProductPut,
  updateProductPatch,
  deleteProduct,
} = require("../controllers/product.controller");

productRoute.get("/", getAllProducts);
productRoute.post("/", createProduct);

productRoute.get("/:id", getOneProduct);
productRoute.put("/:id", updateProductPut);
productRoute.patch("/:id", updateProductPatch);
productRoute.delete("/:id", deleteProduct);

module.exports = productRoute;
