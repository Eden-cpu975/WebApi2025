const express=require('express');
const router=express.Router();
const {GetAll,GetById,AddNew,updateById,deleteById}=require('../controllers/category');

router.get('/',GetAll);
router.get('/:id',GetById);
router.post('/',AddNew);
router.put('/:id',updateById);
router.delete('/.',deleteById);

module.exports=router;