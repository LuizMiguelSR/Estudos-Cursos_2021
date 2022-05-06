/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros */

function media(vetor){
    let media = 0;
    let soma = 0;
    let cont = 0;
    for(const i in vetor){
        soma += vetor[i];
        cont++;
    }
    media = soma / cont;
    console.log(`A média do vetor é ${media}`);
}

vetor = [3, 4, 6, 7];
media(vetor);