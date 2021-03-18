const express = require('express')
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const path = require('path')

const app = express()

//Asset
app.use(express.static('public'))

//Url encoded
app.use(express.urlencoded({extended: false}))

//Json
app.use(express.json())

//Set Template Engine
app.use(expressLayout)
app.set('views', path.join(__dirname, 'resources/views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) =>[
    res.render('home')
])
app.listen(5500, () => {
    console.log("listeing on port 5000");
})