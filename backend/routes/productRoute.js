const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");
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

router.route("/products").get( getAllProducts);
router.route("/product/new").post(isAuthenticatedUser,createProduct);
router.route("/product/:id").put(isAuthenticatedUser,updateProduct);
router.route("/product/:id").delete(isAuthenticatedUser,deleteProduct);
router.route("/product/:id").get(getProductDetails);

module.exports = router;