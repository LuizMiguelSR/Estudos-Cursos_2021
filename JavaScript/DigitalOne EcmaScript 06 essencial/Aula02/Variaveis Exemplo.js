const name = 'Luiz';

//Não podemos alterar o valor
//name = 'Luiz';

//const user = {
//    name: 'Luiz'
//};

//Mas se for um objeto, podemos trocar suas propriedades
//user.name = 'Outro nome';

//Não podmeos fazer o objeto "apontar" para outro lugar
//user = {
//    name: 'Luiz'
//};

const persons = ['Luiz', 'Pedro', 'Jennifer'];

//Podemos adicionar novos itens
persons.push('João');

//Podemos remover algum item
persons.shift();

//Podemos alterar diretamente
persons[1] = 'James';

console.log('\nArray após as alterações: ', persons);