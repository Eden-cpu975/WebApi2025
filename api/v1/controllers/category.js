const categoryModel=require('../models/category');
const { GetAll, GetById, updateById, deleteById } = require('./category');
module.exports={
    GetAll:(req,res)=>{
        try{
            categoryModel.find().then((category)=>{
                return res.status(200).json(category);
            });
        }
        catch
        {
            return res.status(500).json({msg:"500 server error"});
        }
    },
    GetById:(req,res)=>{
        try{
            categoryModel.find({cid:req.params.id}).then((category)=>{
                let prodid=req.params.id;
                return res.status(200).json(category);
            });
        }
        catch
        {
            return res.status(500).json({msg:"500 server error"});
        }
    },
    AddNew:(req,res)=>{

        categoryModel.insertMany([req.body]).then((data)=>{
            return res.status(200).jason(data);
        });
        },
        updateById:(req,res)=>{
            try{
            categoryModel.updateById({cid:req.params.id},req.body).then((data)=>{
                return res.status(200).json(data);
            });
        }
        catch
        {
            return res.status(500).json({msg:"500 server error"});
        }
    },
    deleteById:(req,res)=>{
        try{
            categoryModel.deleteOne({cid:req.params.id}).then((data)=>{
                return res.status(200).json(data);
            })
        }
        catch
        {
            return res.status(500).json({msg:"500 server error"});
        }
    },
}