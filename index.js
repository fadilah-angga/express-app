const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 2601

app.use(cors())
app.use(bodyParser())

app.get('/', (req, res) => {
    res.status(200).send('Welcome !')
})

let products = JSON.parse(fs.readFileSync('./data/products.json'))

app.get('/products', (req, res) => {
    res.status(200).send(products)
})

app.post('/products', (req, res) => {
    products.push(req.body)

    fs.writeFileSync('./data/products.json', JSON.stringify(products))
    res.status(200).send(products)
})

app.delete('/products', (req, res) => {
    let idx = products.findIndex(product => product.id === req.query.id)
    products.splice(idx, 1)

    fs.writeFileSync('./data/products.json', JSON.stringify(products))
    res.status(200).send(products)
})

app.listen(PORT, () => console.log('Server running on port', PORT))