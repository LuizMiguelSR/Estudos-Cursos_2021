function soma(a){
    return function(b){ //retorna um novo par�metro
        return a+b; //retorna a soma dos par�metros
    }   
}

const soma2 = soma(2);

console.log(soma2(3));
console.log(soma2(2));
console.log(soma2(4));
console.log(soma2(5));