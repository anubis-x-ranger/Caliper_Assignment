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

const Product = mongoose.model("Product",productSchema);
export default Product