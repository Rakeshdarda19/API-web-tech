const mongoose = require('mongoose')


let customerSchema = new mongoose.Schema({
    customer_Id: { required: true, type: String },
    customerName : {type: String, required : true},
    email : {type: String, required : true},
    balance : {type: Number, required : true},
})

const customerModel = mongoose.model('customer', customerSchema)

module.exports = customerModel