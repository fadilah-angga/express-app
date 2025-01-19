const express = require('express')
const { productsController } = require('../controller')
const router = express.Router()

router.get('/products', productsController.getProducts)
router.post('/products', productsController.addProducts)
router.patch('/products', productsController.updateProducts)
router.delete('/products', productsController.deleteProducts)

module.exports = router