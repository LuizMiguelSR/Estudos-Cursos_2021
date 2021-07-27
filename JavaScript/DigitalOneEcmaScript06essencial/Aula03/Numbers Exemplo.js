const myNumber = 12.4032;

//Transformar número para string
const numberAsString = myNumber.toString();
console.log(`Número transformado em string: `, typeof numberAsString);

//Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log(`\nNúmero com duas casas decimais:`, fixedTwoDecimals);

//Transforma uma string em float
console.log(`\nString parseada para float:`, typeof parseFloat('13.22'));

//Transforma uma string em int
console.log(`\nString parseada para int:`, typeof parseInt('13.20'));