/*O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.*/

function pedido (codigo, qtde) {
    switch (codigo) {
        case 100:
            return 3.00 * qtde;
        case 200:
            return 4.00 * qtde;
        case 300:
            return 5.50 * qtde;
        case 400:
            return 7.50 * qtde;
        case 500:
            return 3.50 * qtde;
        case 600:
            return 2.80 * qtde;
        default:
            return "Produto inexistente";
    }
}

console.log(pedido(100, 2));
console.log(pedido(200, 2));
console.log(pedido(300, 2));
console.log(pedido(400, 2));
console.log(pedido(500, 2));
console.log(pedido(600, 2));
console.log(pedido(700, 2));