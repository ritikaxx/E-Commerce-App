const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
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

router
  .route("/products")
  .get(isAuthenticatedUser ,getAllProducts);

router
  .route("/product/new")
  .post(isAuthenticatedUser,authorizeRoles("admin") , createProduct);

router.route("/product/:id")
  .put(isAuthenticatedUser,authorizeRoles("admin") ,updateProduct)
  .delete(isAuthenticatedUser,authorizeRoles("admin") ,deleteProduct)
  .get(getProductDetails);

module.exports = router;