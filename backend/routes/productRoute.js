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
  .route("/admin/product/new")
  .post(isAuthenticatedUser,authorizeRoles("admin") , createProduct);

router.route("/admin/product/:id")
  .put(isAuthenticatedUser,authorizeRoles("admin") ,updateProduct)
  .delete(isAuthenticatedUser,authorizeRoles("admin") ,deleteProduct)
  
router.route("/product/:id").get(getProductDetails);
router.route("/review").put(isAuthenticatedUser,createProductReview);

module.exports = router;