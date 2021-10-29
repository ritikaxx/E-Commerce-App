const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const user = require("../models/userModel");
const errorHandler = require("../utils/errorhandler"); 
const ErrorHandler = require("../utils/errorhandler");

exports.isAuthenticatedUser = catchAsyncErrors(async(req,res,next)=>{
    const { token } = req.cookies;
     
    if(!token){
        return next( new errorHandler("please login before!",401));
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await user.findById(decodedData.id);
    next();

});

exports.authorizeRoles = (...roles)=>{
    return(req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next (
                new ErrorHandler(
                'Role: $(req.user.role is not allowed to access this resource',
                403
                )
            );
        }
        next();
    };
};