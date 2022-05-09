const user = {
    name: 'Luiz Miguel',
    lastname: 'Santos Rodrigues'
}

//Recupera as chaves do objeto
console.log(`Propriedades do objeto user:`, Object.keys(user));

//Recupera os valores das chaves do objeto
console.log(`\nValores das propriedades do objeto user:`, Object.values(user));

//Retorna um array contendo [nome_prop, valor_prop]
console.log(`\nLista de propriedades e valores:`, Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, {fullname: 'Luiz Miguel Santos Rodrigues'});

console.log(`\nAdiciona a propriedade fullname no objeto user`, user);
console.log(`\nRetorna um novo objeto mergeando dois ou mais objetos`, Object.assign({}, user, {age: 31}));

//Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log(`\nVariável newObj após as alterações:`, newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Luiz Miguel'};
Object.seal(person);

person.name = 'Luiz Santos';
delete person.name;
person.age = 26;

console.log(`\nVariável person após as alterações:`, person);