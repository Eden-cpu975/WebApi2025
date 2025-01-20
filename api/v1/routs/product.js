const router=require('express').Router();
const{Get,GetById,AddNew,UpdateById,DeleteById}=require('../controllers/product')
router.get('/',Get);
router.get('/:id',GetById);
router.post('/',AddNew);
router.put('/:id',UpdateById);
router.delete('/:id',DeleteById);

module.exports=router;