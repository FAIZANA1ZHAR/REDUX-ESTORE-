const express = require('express')
const cors = require('cors')


const dotenv = require('dotenv')
dotenv.config()

var products = require('./Routes/products')

var path = require('path')

var con = require('./config/config')

const app = express()
var port = process.env.PORT || 4000
app.use(express.json())
app.use(cors())

app.use('/products', products)


app.listen(port, () => console.log('   LISTENING AT', port))
