/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações. */

function intervalo(vetor) {
    let dentro = 0;
    let fora = 0;
    for (const i in vetor) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentro++;            
        } else {
            fora++;
        }
    }
    console.log(`${dentro} números dentro do intervalo e ${fora} números fora do intervalo.`)
}

vetor = [1, 2, 3, 10, 11, 15, 20, 21, 25];
intervalo(vetor);