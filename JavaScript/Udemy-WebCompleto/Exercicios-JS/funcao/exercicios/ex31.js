/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console. */

function contaNegativo (vetor) {
    let cont = 0;
    for (const i in vetor) {
        if (vetor[i] < 0) {
            cont++;           
        }
    }
    if (cont === 0){
        console.log(`O vetor não possui números negativos`);
    } else {
        console.log(`O vetor possui ${cont} números negativos`);
    }
}

vetorA = [3, -5, 6, -2, -7];
vetorB = [3, 5, 6, 2, 7];
contaNegativo(vetorA);
contaNegativo(vetorB);