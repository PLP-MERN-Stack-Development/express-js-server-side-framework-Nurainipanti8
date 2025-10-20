const mongoose=require('mongoose');

const productSchema=new mongoose.Schema=({
   id:{type: number, require:true, unique :true},
  name : {type:string, require:true},
description: {type:string, require:true},
 price: {type:number, require:true},
 category: {type:string,require:true},
  inStock: {type:boolean,require:true}
})

const Product=mongoose.models('Products',productSchema);

module.exports=Product;  