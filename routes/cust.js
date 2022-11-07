const router = require ('express').Router()
var customerModel = require('../models/customer')
var customer = customerModel.find({})

// app.get("/customer" , (req,res) => {
//     res.render('customer',{customer : 'mobile'})
// })

router.get("/customer", function(req,res,next){
    customer.exec(function(err,data){
        if(err) throw err;
        res.render('cust', {title: 'Coustomer Table', records:data})
    })
    
})

router.get('/customer/:customer_Id', async (req, res) => {
    try {
        console.log(req.params.id);
        const data = await customerModel.findOne({ customer_Id: req.params.customer_Id});
        console.log(data);
        if (!data) {
            return res.status(400).json({
                status: "Failed",
                message: "Id is not present"
            })
        }
        res.json({
            status: "Sucess",
            data
        })
    } catch (e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})

router.post('/customer', async (req,res)=> {
    const customer_Id= "CT" + parseInt(Math.random() * 10000)
    try{
        const data = await customerModel.create({
            customer_Id: customer_Id,
            customerName : req.body.customerName,
            email : req.body.email,
            balance : req.body.balance
        })
        res.status(200).json({
            message : "success",
            data
        }) 
    } catch(e){
           console.log(e.message)
           res.status(400).json({
            message : e.message
           }) 
    }
})
module.exports = router