const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send("Alô Mundo!");
})


app.listen(3030, () => {
    console.log("Rodando!!!");
})
