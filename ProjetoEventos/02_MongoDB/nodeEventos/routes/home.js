module.exports = function(app){
    var home = app.controllers.home;
    app.get('/', home.home);
    app.get('/login', home.index);      
    app.post('/login', home.login);
    app.get('/logout', home.logout)
    // app.post('/novoUsuario', home.novoUsuario);
}