const escola = "Cod3r"

console.log(escola.charAt(4)) // mostra a letra da posição indicada
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // valor na tabela unicode
console.log(escola.indexOf('3')) // mostra a posição do valor indicado
console.log(escola.substring(1)) // mostra o valor de acordo com a posição indicada
console.log(escola.substring(0, 3)) // mostra de determinado posição até outra
console.log('Escola '.concat(escola).concat("!")) // concatena
console.log('Escola '+escola+"!") // concatena
console.log(escola.replace(3, 'e')) // substitui
console.log('Ana,Maria,Pedro'.split(',')) // separa em array