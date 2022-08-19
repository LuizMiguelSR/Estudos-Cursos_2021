/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

function maiorMenor(vetor) {
    let maior = 0;
    let menor = 0;

    for (const i in vetor) {
        if (vetor[0] > maior) {
            maior = vetor[i];
            menor = vetor[i];
        } else {
            if (vetor[i] > maior){
                maior = vetor[i];
            }
           if (vetor[i] < menor){
                menor = vetor[i];
            }
        }
    }
    console.log(`O maior número é o ${maior} e o menor número é o ${menor}`);
}

vetor = [3, 1, 5, 2, 9, 7, 8, 4, 6];
maiorMenor(vetor);