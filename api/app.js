const express = require('express')
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json')

const app = express()

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/", routes)

module.exports = app