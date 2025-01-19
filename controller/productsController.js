const fs = require('fs');

let products = JSON.parse(fs.readFileSync('./data/products.json'))

module.exports = {
    getProducts: (req,res) => {
        res.status(200).send(products)
    },
    addProducts: (req, res) => {
        products.push(req.body)

        fs.writeFileSync('./data/products.json', JSON.stringify(products))
        res.status(200).send(products)
    },
    updateProducts: (req, res) => {
        let idx = products.findIndex(product => product.id == req.query.id)

        for (let prop in products[idx]) {
            for (let bodyProp in req.body) {
                if (prop == bodyProp) {
                    products[idx][prop] = req.body[bodyProp]
                }
            }
        }
        fs.writeFileSync('./data/products.json', JSON.stringify(products))
        res.status(200).send(products)
    },
    deleteProducts: (req, res) => {
        let idx = products.findIndex(product => product.id == req.query.id)
        products.splice(idx, 1)

        fs.writeFileSync('./data/products.json', JSON.stringify(products))
        res.status(200).send(products)
    }
}