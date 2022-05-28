//Tipos Primitivos

//Boolean
var vOuF = false;
console.log(typeof(vOuF));

//Number
var numero = 1;
console.log(typeof(numero));

//String
var nome = 'Davi';
console.log(typeof(nome));

var variavel = 'Davi';
variavel = 'Stalleiken';
console.log(variavel);

let variavel2 = 'Davi';
variavel2 = 'Stalleiken';
console.log(variavel2);

const constante = 'Davi';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//Comparação / true
var comparacao = '0' == 0;
console.log(comparacao);

//Comparação Idêntica / false
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//Potenciação
var potencia = 2 ** 10;
console.log(potencia);

