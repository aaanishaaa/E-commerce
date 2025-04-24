const mongoose = require("mongoose");
const productSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim:true,
        unique:true,
    },
    price:Number, 
    stock:{
        type: Number,
        default: 1,     
    },   
});
const productModel=mongoose.model("product",productSchema);

module.exports={
    productModel,
};