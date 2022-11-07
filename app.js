const express = require('express')
const bodyparser = require('body-parser')
const app = express()
var path = require('path')
const productRoute = require('./routes/prod')
const customerRoute = require('./routes/cust')

app.set('views', path.join(__dirname, 'views'))
app.set('view enjine', 'ejs')

app.use(bodyparser.json())
app.use('/',productRoute)
app.use('/',customerRoute)

module.exports = app