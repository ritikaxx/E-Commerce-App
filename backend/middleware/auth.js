const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const user = require("../models/userModel");
const errorHandler = require("../utils/errorhandler"); 

exports.isAuthenticatedUser = catchAsyncErrors(async(req,res,next)=>{
    const { token } = req.cookies;
     
    if(!token){
        return next( new errorHandler("please login before!",401));
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();

});