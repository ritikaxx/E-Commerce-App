const Product = require("../models/productModel");
const errorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
//create product--ADMIN
exports.createProduct = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
})

//get all products

exports.getAllProducts = catchAsyncErrors(async(req,res)=>{
    const product = await Product.find();

    res.status(200).json({
        success:true,
        product
    })
})

// get product details
exports.getProductDetails = catchAsyncErrors(async(req,res,next)=>{

    const product = await Product.findById(req.params.id);

if(!product){
    return next(new errorHandler("product not found",404));
}

res.status(200).json({
    success:true,
    product
})
})

// update product --ADMIn

exports.updateProduct = catchAsyncErrors(async(req,res,next)=>{

    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new errorHandler("product not found",404));
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
})


//delete product

exports.deleteProduct = catchAsyncErrors(async(req,res,next)=>{

    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new errorHandler("product not found",404));

    }

    await product.remove();

    res.status(200).json({
        success:true,
        message:"product deleted successfully"
    })
})  