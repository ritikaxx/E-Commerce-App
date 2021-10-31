const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");

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

    await user.save({validateBeforeSave:false});

    const resetPasswordUrl = '${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}';

    const message = 'your password reset token is :- \n\n  ${resetPasswordUrl} \n\n if you have not requested this iurl , please ignore';

    try {
        await sendEmail({
            email : user.email,
            subject:''
        });
        res.status(200).json({
            success:true,
            message:'email sent to ${user.email successfully',
        })
    }catch (error) {
        user.resetPasswordToekn = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({validateBeforeSave:false});

        return next(new ErrorHandler(error.message,500));
    }
});