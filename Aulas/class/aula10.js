const express = require('express');

const app = express();
port = 3030;

app.get('/', (req, res) => {
    res.send("Alo mundo!");
});

// colocando parametro na rota => /nome_rota:nome_parametro
// só pode enviar o método .send uma única vez dentro de uma rota
app.get('/ola:nome', (req, res) => {
    res.send(req.params.nome);
});

app.get('/html', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
    console.log("run server in port: " + port);
});
