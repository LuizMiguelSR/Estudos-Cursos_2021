//Todas as fun��es que retornam um objeto, sem a necessidade de cham�-las com o new, s�o considerasd fun��es *Factory*.

function Pessoa(customProperties) {
	return {
		name: 'Luiz Miguel',
		lastName: 'Santos Rodrigues',
		...customProperties
	}
}

// Factory
const pessoa = Pessoa({name: 'Custom Name', age: 35});
console.log(pessoa);