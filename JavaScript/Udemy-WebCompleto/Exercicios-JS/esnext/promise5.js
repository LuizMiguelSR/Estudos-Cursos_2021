function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        // Pode ser feito o try catch no ínicio, porém ele será tratada na chamada da função no primeiro tratamento que aparecer
        try {
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

// Tratando erro
funcionarOuNao('Testando...', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))