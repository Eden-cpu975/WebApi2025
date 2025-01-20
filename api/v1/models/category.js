const mongoose=require('mongoose');
const categorySchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    cname:String,
    price:String,
    cdesc:String,
    picname:String,
    cid:Number,
    cid:Number
});
const model=mongoose.model('category',categorySchema);

module.exports=model;