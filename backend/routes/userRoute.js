const express = require("express");
const {registerUser} = require("../controllers/userController");
const router = express.Router();

routr.route("/register").post(registerUser);

module.exports = router;
