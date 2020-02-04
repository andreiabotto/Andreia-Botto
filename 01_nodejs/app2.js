var fn = require('./metodos');

var soma = fn.somar(2,7);
console.log('somar: '+soma);

var multiplica = fn.multiplicar(2,7);
console.log('multiplicar: '+multiplica);

var cont = fn.contar('Hoje vai chover');
console.log("contar:" + cont);

console.log('----------------------');

// PASSANDO UMA FUNÇÃO ANÔNIMA
var x1 = fn.executar(function(s){
    return s.length;
});
console.log('executar - x1: '+ x1);

// PASSANDO UMA FUNÇÃO NOMEADA
function comparar(s) {
    return s == 'Curso';
}
var x2 = fn.executar(comparar);
console.log('executar - x2 ' + x2);

//passando uma arrow function
var x3 = fn.executar(s => s + ' Noturno')
console.log('executar - x3 ' + x3); 

