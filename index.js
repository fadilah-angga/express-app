const express = require('express');
const app = express();
const PORT = 2025

app.get('/', (req, res) => {
    res.status(200).send('Welcome !')
})

app.listen(PORT, () => console.log('Server running on port', PORT))