/*Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true ou false.*/

function verifica (inteiro) {
    if (inteiro % 3 == 0){
        return true;
    } else {
        return false;
    }
}

console.log(verifica(3));
console.log(verifica(2));
console.log(verifica(150));
