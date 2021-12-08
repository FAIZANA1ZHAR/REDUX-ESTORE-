//const Client = require('../models/clientFormModel');
//const User = require('../models/clientSignInModel');
//const Jobs = require('../models/jobFormmodels');
const Products = require('../models/ProductSchema')

var express = require('express')
const router = express.Router({
  mergeParams: true,
})

router.get('/',async(req,res)=>{

  
    const products = await Products.find({});
    console.log("PRODUCTS=>",products);
    if(products.length){
     return res.status(200).send({products});
    }
    else{
     return res.status(401).send("No products found");
    }

})
router.post('/addProduct', async (req, res) => {
    // let adduser = 0
     const {productName, price} = req.body
     console.log(req.body)

    const product = new Products({
       productName,
       price,
    })
    product.save()
    .catch((err) => console.log(err))
    res.status(200).send(product)
  })
  router.delete('/deleteProduct/:id',async(req,res)=>{
          
    const {id} = req.params;
     
   const product = await Products.findOneAndDelete({_id:id})
   console.log("Job Deleted",product)
   if(product) {
    res.status(201).send("Product Deleted Successfully")

   }   else{
    res.status(401).send("Failed Deletion")
   }
  })

  module.exports = router