const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

var productForm = mongoose.Schema({
productName:{
    type:String,
    required:true
},
price:{
    type:String,
    required:true
}
});

var productForm = mongoose.model('products', productForm)

module.exports = productForm