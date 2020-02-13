module.exports = function (app) {

    var mongoose = require('mongoose');
    var Usuario = mongoose.model('usuarios');

    var HomeController = {

        index: function (request, response) {
            response.render('home/login');
        },
        home: function (request, response) {
            response.render('home/home');
        },
        login: function (request, response) {

            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;

            var query = { 'nome': nome, 'senha': senha };

            Usuario.findOne(query).select('nome senha')
                .exec(function (erro, usuario) {
                    if (erro) {
                        console.log(erro);                        
                        response.redirect('/');
                    }
                    else {
                        request.session.usuario = usuario;
                        response.redirect('/menu');
                    }
                });

            // if (nome == "admin" && senha == "admin") {
            //     var usuario = request.body.usuario;
            //     request.session.usuario = usuario;
            //     response.redirect('/menu');
            // }
            // else {
            //     response.redirect('/');
            // }
        },
        logout: function (request, response) {
            request.session.destroy();
            response.redirect('/');
        },
        //cadastro de usuários
        novoUsuario: function (request, response) {
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;
            var confirma = request.body.usuario.confirma;
            if ((senha != confirma) || nome.trim().length == 0) {
                response.redirect('/login');
            }
            else {
                // var usuario = request.body.usuario;
                var usuario = {
                    nome: request.body.usuario.nome,
                    senha: request.body.usuario.senha
                }

                Usuario.create(usuario, function (erro, usuario) {
                    if (erro) {
                        console.log(erro);
                        response.redirect('/login');
                    }
                    else {
                        response.redirect('/menu');
                    }
                });
            }
        }
    }


    return HomeController;
}