//VETORES OU ARRAYS

/*

let array = ['String', 1, true];
console.log(array);

let array2 = ['string', 1, true, ['array1'], ['array2']];
console.log(array2[0]);

*/

/* Manipulando Arrays

//FOR EACH
array.forEach(function(item, index){console.log(item, index)});

//PUSH - Coloca algo ao fim do Array
array.push('novo item');

//POP - Remove um item ao final do Array
array.pop();

//SHIFT - Tira um item do início do Array
array.shift();

//UNSHIFT - Coloca um item no início do Array
array.unshift();

//INDEX Of - Encontra o índice de um valor dentro do array
console.log(array.indexOf(true));

//SPLICE - Pega uma parte do array e apaga o resto
array.splice(0, 3);

//SLICE - Retorna parte de um Array já existente
let novoArray = array.slice(0, 3);
console.log(novoArray); //Só pega os três primeiros índices

*/

//OBJETOS

let object = {string: 'string', Number: 1, Boolean: true, Array: [array], objectInterno: {objectInterno: 'Objeto interno'}}
console.log(object.objectInterno.objectInterno);

//DESESTRUTURAÇÃO DO OBJETO
var string = object.string;
console.log(string);

var array = object.array;
console.log(array);

//VARIÁVEL PARA PEGAR ELEMENTOS DE UM OBJETO
var { string, Boolean, objectInterno } = object;
console.log(string, Boolean, objectInterno);

