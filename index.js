const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views/')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/csprojects', (req, res) => {
    res.render('csprojects')
})



app.listen(3000, () => {
    console.log("Running on port 3000...")
})