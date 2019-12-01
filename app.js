//Importing Required Packages and files
require('./setup/mongoose')
const express = require('express')
const path = require('path')
const ejs = require('ejs')
const passport = require('passport')
const VisitingRouter = require('./handling')

//Setting Default Paths
const static_path = path.join(__dirname,'./static')
const views_path = path.join(__dirname,'./views')

//Setting Express
const app = express()
app.use(express.json())
app.use(express.static(static_path))
app.set('views',views_path)
app.set("view engine",'ejs')

app.use(VisitingRouter)
const port = 3000

//Starting server on Port 3000
app.listen(3000,() => {
    console.log("Running on port:",port)
})