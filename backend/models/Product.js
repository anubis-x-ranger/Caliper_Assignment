import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title : {type:String,required:true,unique:true},
        desc : {type:String,required:true}, 
        image : {type:String,required:true},
        price : {type:String,required:true},
        
    },
    { timestamps : true }
);

module.exports = mongoose.model("Product",productSchema)