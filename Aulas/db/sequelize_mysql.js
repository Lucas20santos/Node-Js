const Sequelize = require('sequelize')
const sequelize = new Sequelize('aluno', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Conectado com Sucesso");
}).catch((err) => {
    console.log("Falha na conectar: " + err);
});
