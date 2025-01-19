const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 2601
const { productsRouter } = require('./router')

app.use(cors())
app.use(bodyParser())

app.use('/data', productsRouter)

app.listen(PORT, () => console.log('Server running on port', PORT))