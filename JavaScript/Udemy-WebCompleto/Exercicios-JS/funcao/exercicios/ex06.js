/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.*/

function simples(capitalInicial, taxaJuros, tempoAplicacao) {
    return (capitalInicial * (taxaJuros/100) * tempoAplicacao) + capitalInicial;
}

function composto(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial * (1 + (taxaJuros/100)) ** tempoAplicacao;
}

console.log(`Montante em juros simples: R$ ${simples(2000, 10, 2).toFixed(2)}`);
console.log(`Montante em juros compostos: R$ ${composto(2000, 10, 2).toFixed(2)}`);