var express = require('express')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

const port = 4000

var stocks = require('./api/controllers/stocks')
var swagger = require('./api/controllers/swagger')

var app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/stocks', stocks)
app.use('/api/docs', swagger.router)

app.listen(port)

console.log('Server started on port ' + port)
