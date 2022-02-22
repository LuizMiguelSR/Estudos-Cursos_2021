/*Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido*/

function aumento (planoTrabalho, salarioAtual) {
    switch (planoTrabalho) {
        case 'A':
            return salarioAtual * 1.10;
        case 'B':
            return salarioAtual * 1.15;
        case 'C':
            return salarioAtual * 1.20;
        default:
            return 'Plano inválido!';
    }
}

console.log(aumento('A', 1000));
console.log(aumento('B', 1000));
console.log(aumento('C', 1000));
console.log(aumento('Y', 1000));