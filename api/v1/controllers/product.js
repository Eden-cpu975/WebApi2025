const { pid } = require('process');
const productModel=require('../models/product');
module.exports={
    Get:(req,res)=>{
        try{
            productModel.find().then((products)=>{
            return res.status(200).json(products);
            });
        }
        catch
        {
            return res.status(500).json({Msg:"500 Server Error"});
        } 
       },
    GetById:(req,res)=>{
        try{

           productModel.find({pid:req.params.id}).then((product)=>{
            return res.status(200).json(product);
            });
        }
        catch
        {
            return res.status(500).json({Msg:"500 Server Error"});
        } 
    },
    AddNew:(req,res)=>{
        try{
            productModel.insertMany([req.body]).then((data)=>{
                return res.status(200).json(data);
            });
        }
        catch
        {
            return res.status(500).json({Msg:"500 Server Error"});
        }
    },
    UpdateById:(req,res)=>{
        try{
        productModel.updateone({pid:req.params.id},req.body).then((data)=>{
            return res.status(200).json(data);
        });
        }
        catch
        {
            return res.status(500).json({Msg:"500 Server Error"});
        }
     },
     DeleteById:(req,res)=>{
        try{
            productModel.deleteone({pid:req.params.id}).then((data)=>{
                return res.status(200).json(data);
            });
            return res.status(200).json({Msg:"Add New Product",body:req.body});
        }
        catch
        {
            return res.status(500).json({Msg:"500 Server Error"});
        }
     }
    }