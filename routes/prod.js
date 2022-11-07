const router = require ('express').Router()
var productModel = require('../models/product')
var product = productModel.find({})

// app.get("/product" , (req,res) => {
//     res.render('product',{product : 'mobile'})
// })

router.post('/product', async (req,res)=> {
    const product_Id= "PPD" + parseInt(Math.random() * 10000)
    try{
        const data = await productModel.create({
            product_Id: product_Id,
            productType : req.body.productType,
            productName : req.body.productName,
            productPrice : req.body.productPrice,
            availableQty : req.body.availableQty
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

router.get("/", function(req,res,next){
    product.exec(function(err,data){
        if(err) throw err;
        res.render('prod', {title: 'Product Table', records:data})
    })
    
})

router.get('/product/:product_Id', async (req, res) => {
    try {
        console.log(req.params.id);
        const data = await productModel.findOne({ product_Id: req.params.product_Id});
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

router.get('/product/:productType', async (req, res) => {
    try {
        console.log(req.params.id);
        const data = await productModel.findOne({ productType: req.params.productType});
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

router.put('/:productName/availableQty', async (req, res) => {
    try {
        await assetModel.findByIdAndUpdate(req.params.id, req.body)
        const posts = await assetModel.findById(req.params.id);
        res.status(200).json(posts);
    } catch (e) {
        console.log(e.message)
        res.status(400).json({
            message: e.message
        })
    }
})


module.exports = router