//Retorna o tamanho de uma string
const textsize = "Texto".length;
console.log(`Quantidade de letras: ${textsize}`);

//Retorna um array quebrando a string por um delimitador
const splittedText = "Texto".split('x');
console.log(`\nArray com as posições separadas pelo delimitador:`, splittedText);

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log(`\nSubstituição de valor:`, replacedText);

//Retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log(`\nÚltima letra de uma string:`, lastChar);

const allWhitoutLastChar = 'Texto'.slice(0, -1);
console.log(`\nValor da string da primeira letra menos a última`, allWhitoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log(`\nValor da string da segunda letra até a última:`, secondToEnd);

//Retorna N caracteres a partir de uma posição
const twocharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log(`\nAs duas primeiras letras são:`, twocharsBeforeFirstPos);