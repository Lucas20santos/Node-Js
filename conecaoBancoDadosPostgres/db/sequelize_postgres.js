const Sequelize = require('sequelize')
const sequelize = new Sequelize('banco_teste', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(() => {
    console.log("Conectado com Sucesso");
}).catch((err) => {
    console.log("Falha na conectar: " + err);
});