/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares */

function parImpar(){
    let contPar = 0;
    let contImpar = 0;
    for (const i in vetor) {
        if (vetor[i]%2===0) {
            contPar++;          
        } else {
            contImpar++;
        }
    }
    console.log(`${contPar} números pares, ${contImpar} números impares`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
parImpar(vetor);