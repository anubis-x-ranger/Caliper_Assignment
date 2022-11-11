import express from "express";
import Product from '../models/Product.js';

const productrouter = express.Router();

productrouter.post('/create/new',async(req,res)=>{
    const newProduct= new Product(req.body);

    try{
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct)
    }catch(err){
        res.status(500).json(err);
    }
});

//GET Products
productrouter.get('/',async(req,res)=>{
    try{
        let products=await Product.find();
        res.status(200).json(products)
    }catch(err){
        res.status(500).json(err);
    }
});


export default productrouter