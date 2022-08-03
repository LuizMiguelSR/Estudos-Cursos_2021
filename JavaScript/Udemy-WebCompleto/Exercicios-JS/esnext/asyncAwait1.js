function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

esperarPor(2000)
    .then(() => console.log('Executando Promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando Promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando Promise 3...'))