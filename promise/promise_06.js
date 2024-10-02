function promessaComPossivelErro(chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve('Tudo certo!!')
        }
    })
}

// tratamento para todos os erros dos then's
promessaComPossivelErro(0.5)
    .then(v => v + '!!!!')
    .then(v => console.log(v))
    .catch(erro => console.log(erro))
    .finally(() => console.log('Fim!'))