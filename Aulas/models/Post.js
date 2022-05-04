const db = require('./db');
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

module.exports = Post
// execultar uma unica vez se ele apaga e cria novamente
// Post.sync({force: true})
