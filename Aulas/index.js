const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post');

// config
    // template engine
    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main',
        runtimeOptions: 
        {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        }
    }));
    app.set('view engine', 'handlebars');

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    // Rotas
    app.get('/cad', (req, res) => {
        res.render('formularios')
    });

    app.get('/', (req, res) => {
        Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
           res.render('home', {posts: posts}) 
        });
    });

    app.get('/deletar/:id', (req, res) => {
        Post.destroy({where: {'id': req.params.id}})
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            res.send("Essa postagem não existe ")
        })
    })

    app.post('/add', (req, res) => {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(() => {
            res.redirect('/');
        }).catch((err) => {
            res.send('Houve um erro: ' + err);
        });
    });

app.listen(8081, () => {
    console.log("Servidor rodando!");
});
