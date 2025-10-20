const express=require('express');
const router= express.Router();
const roduct=require('../models.js/product');
const Product = require('../models.js/product');


router.get('/', async (req, res)=>{
  try {
  const Products=await Products.find();
    res.json(Products);
  } catch (error) {
    console.error({message:error.message})
  }
});

router.post('/', async (req, res)=>{
  const {id,name,description,price,instock}=req.body;
  try {
    const products=new Product(id,name,description,price,instock);
    const save=await products.save.req.params.id;
    ({new:true})
    res.json(save)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

router.put('/id', async (req, res)=>{
  
  try {
    const products=await products.findByIdAndUpDate(
    req.params.id);
    res.json(products)
  } catch (error) {
    console.error({message:error.message});
  }
})

router.delete('/', async(req, res)=>{
  try {
    const products=await products.findByIdAndDelete(req.params.id);
    res.json({message: "Student Deleted, Bye"}) ;
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})
 

module.exports=router;