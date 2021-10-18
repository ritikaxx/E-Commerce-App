const express = require("express");
const router = express.Router();
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductDetails,
    createProductReview,
    getProductReviews,
    deleteReview,
    getAdminProducts,
  } = require("../controllers/productController");

router.route("/products").get(getAllProducts)

module.exports = router;