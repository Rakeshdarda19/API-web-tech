// const express = require('express')
// var mongoose = require('mongoose')
// const path = require('path')
// const app = express()


// const port = 3000
// mongoose.connect('mongodb://localhost:27017/product',{
//     useNewUrlParser : true
// })

// var con = mongoose.connection;
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine','ejs')
const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})

