var moment = require('moment');

//obtendo a data atual
var now = moment();
console.log(now.format('DD/MM/YYYY'));

// adicionando dois dias à data
var doisdias = now.add(2, "days");
console.log("Daqui a dois dias: "+doisdias.format("DD/MM/YYYY"));

// ver mais em momentjs.com