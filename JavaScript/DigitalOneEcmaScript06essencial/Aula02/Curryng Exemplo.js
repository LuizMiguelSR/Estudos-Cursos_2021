function soma(a){
    return function(b){ //retorna um novo parāmetro
        return a+b; //retorna a soma dos parāmetros
    }   
}

const soma2 = soma(2);

console.log(soma2(3));
console.log(soma2(2));
console.log(soma2(4));
console.log(soma2(5));