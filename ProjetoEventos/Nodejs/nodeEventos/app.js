var express = require('express');
app = express();

app.set('views', __dirname + 'views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// load('models')
//   .then('controllers')
//   .then('routes')
//   .into(app);

app.listen(300, function(){
  console.log("Aplicação no ar.");  
});