const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

//register a user

exports.registerUser = catchAsyncErrors(async(req,res,next)=>{

    const { name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"this is a sample id",
            url:" profilepicUrl",
        },
    });
    sendToken(user,201,res);
});

//login user

exports.loginUser = catchAsyncErrors(async(req,res,next)=>{

    const {email, password} = req.body;

    //checking if user has entered email and password
    if(!email || !password){
        return next(new ErrorHandler("please enter email and password",400));
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("invalid email or password",400));
    }

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("invalid email or password",400));
    }

    sendToken(user,200,res);

});

//logout user

exports.logout = catchAsyncErrors(async(req,res,next)=>{

    res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success:true,
        message:"logged out",
    });
});

//forget password

exports.forgotPassword = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findOne({email:req.body.email});

    if(!user){
        return next(new ErrorHandler("User nor found",404));
    }

    //get reset password token
    const resetToken =useruser.getResetPasswordToken();
    
})