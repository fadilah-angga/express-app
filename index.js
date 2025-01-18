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

app.listen(PORT, () => console.log('Server running on port', PORT))