//1-criando-arrays.js
//Cria��o comum
const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
console.log(arr)
console.log(arr2)

//Array.of
//Cria uma nova inst�ncia de array a partir do n�mero de par�metros informados.
const arr3 = Array.of(1, 2, 3);
console.log(arr3)

//Por inst�ncia
//Cria uma nova inst�ncia de array de acordo com os par�metros informados
const arr4 = Array(3);
console.log(arr4)
// [empty x 3]

const arr5 = Array(3, 2);
console.log(arr5)
// [3, 2]

//Array.from
//Cria uma nova inst�ncia de array a partir de um par�metro array-like ou iterable object
//node list
const divs = document.querySelectetorAll('div');
//converte para array
const arr6 = Array.from(divs);
console.log(arr6)