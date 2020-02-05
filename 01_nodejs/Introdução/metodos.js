// FUNCIONA PARA STRINGS E NUMEROS
exports.somar = function(x,y){
    return x + y; 
}

// FUNCIONA PARA NUMEROS
exports.multiplicar = function(x,y){
    return x * y;
}

// FUNCIONA PARA STRINGS
exports.contar = function(s){
    return s.length;
}

//operacao: função callback
exports.executar = function(operacao) {
    return operacao('Curso Node');
}

// ======================================
// TRANFORMANDO ARROW Function
// =====================================

exports.somar2 = (x, y) => x + y;
exports.multiplicar2 = (x, y) => x * y;
exports.contar2 = s => s.length; //quando tiver um parametro pode-se retirar o parenteses


