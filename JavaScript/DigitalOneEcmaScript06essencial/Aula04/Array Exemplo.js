const users = ['Luiz', 'Pedro', 'Jenifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Luiz',
        age: 31,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jenifer',
        age: 18,
        gender: gender.WOMAN
    }
];

//Retornar a quantidade de itens de um array
console.log(`Items:`, persons.length);

//Verificar se é array
console.log(`A variável persons é um array:`, Array.isArray(persons));

//Iterar os itens de array
persons.forEach(persons => {
    console.log(`Nome: ${persons.name}`);
});  

//Filtrar array
const mens = persons.filter(persons => persons.gender === gender.MAN);
console.log(`\nNova lista apenas com homens:`, mens);

//Retornar um novo
const personsWithCourse = persons.map(person =>{
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log(`\nPesssoas com a adição do course:`, personsWithCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log(`\nSoma de idade das pessoas`, totalAge);

//Juntando operações
const totalEvenAges = persons
                            .filter(person => person.age % 2 === 0)
                            .reduce((age, person) => {
                                age += person.age;
                                return age;
                            }, 0);
console.log(`\nSoma de idades das pessoas que possuem idade par`, totalEvenAges);