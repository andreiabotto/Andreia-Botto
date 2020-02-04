// modulo unico

//função declarada (com nome)
function calcular(a,b) {
    return a + b;
}

//função anônima
// module.exports = function(x,y){
//     return calcular(x,y);
// }

//arrow function
module.exports = (x, y) => calcular(x,y);

