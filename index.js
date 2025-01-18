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

app.get('/products', (req, res) => {
    let products = JSON.parse(fs.readFileSync('./data/products.json'))
    res.status(200).send(products)
})

app.listen(PORT, () => console.log('Server running on port', PORT))