module.exports = function (app) {

    var Evento = app.models.eventos;
    var moment = require('moment');

    var EventosController = {
        menu: function (request, response) {
            var s_usuario = request.session.usuario;
            params = { usuario: s_usuario };
            response.render('eventos/menu', params);
        },
        cadastroUsuario: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/cadUsuario', params);
        },
        cadastroEvento: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/cadEvento', params);
        },
        listaEventos: function (request, response) {

            Evento.find(function (erro, eventos) {
                if(erro){
                    response.redirect('/menu');
                }
                else{
                    var usuario = request.session.usuario,
                    params = {
                        usuario : usuario,
                        eventos : eventos,
                        moment : moment
                    }
                    response.render('eventos/listaEventos', params);
                }
            });

            // var usuario = request.session.usuario,
            //     params = { usuario: usuario };
            // response.render('eventos/listaEventos', params);
        },
        //cadastro de eventos
        novoEvento: function (request, response) {
            var evento = request.body.evento;
            if (evento.descricao.trim().length == 0 || evento.data == 'undefined'
                || evento.preco.trim().length == 0) {
                response.redirect('/cadEvento');
            }
            else {
                Evento.create(evento, function (erro, evento) {
                    if (erro) {
                        response.redirect('/cadEvento');
                    }
                    else {
                        response.redirect('/listaEventos');
                    }
                });
            }
        }

    }

    return EventosController;
}