// Promise all

function gerarNumeroEntre(min, max, tempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })

}

console.time('paralelo')
Promise.all([
    gerarNumeroEntre(1, 70, 4000),
    gerarNumeroEntre(1, 70, 1000),
    gerarNumeroEntre(1, 70, 500),
    gerarNumeroEntre(1, 70, 2000),
    gerarNumeroEntre(1, 70, 1500),
    gerarNumeroEntre(1, 70, 3000),
])
    .then(valores => console.log(valores))
    .then(() => console.timeEnd('paralelo'))