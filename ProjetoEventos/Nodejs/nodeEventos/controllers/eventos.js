module.exports = function(app){
    var EventosController = {
        menu: function(request, response){
            var s_usuario = request.session.usuario;
            params = {usuario : s_usuario};
            response.render('eventos/menu', params);
        }
    };
    return EventosController;
}