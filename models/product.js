const mongoose = require('mongoose')


let productSchema = new mongoose.Schema({
    product_Id: { required: true, type: String },
    productType : {type: String, required : true},
    productName : {type: String, required : true},
    productPrice : {type: Number, required : true},
    availableQty : {type: Number, required : true}
})

const productModel = mongoose.model('product', productSchema)

module.exports = productModel