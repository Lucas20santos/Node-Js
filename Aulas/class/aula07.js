const express = require('express');

const app = express();
port = 3030;

app.get('/', (req, res) => {
    res.send("Alo mundo!");
});

app.listen(port, () => {
    console.log("run server in port: " + port);
})

