const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('saadahmed twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1> please login at saadahmed.dev </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> Chai aur Code </h2>')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})