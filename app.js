const express=require('express');
const app=express();
const productRouter=require('./api/v1/routs/product');
const morgan=require('morgan');
const mongoose=require('mongoose');
app.use(morgan('dev'));
app.use(express.json());

app.use(express.urlencoded({extended:true}));



const mongoConnstr=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ecom.tyino.mongodb.net/WebApi2025`;
mongoose.connect(mongoConnstr).then(()=>{
   console.log("Connected To mongo");
})//מנגנון שמאפשר לעבוד עם פונ אסיכרונית בצורה סיכרונית

app.use('/product',productRouter);

app.all('*',(req,res)=>{
    return res.status(404).json({Msg:"Not Found 404"});
})

module.exports=app;