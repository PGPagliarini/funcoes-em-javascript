const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname, '..', 'dados', 'aprovados.txt')

console.log(caminho)

function lerArquivo(erro, conteudo) {
    if (erro) return
    console.log(conteudo.toString())
}

// Função Assíncrona
fs.readFile(caminho, lerArquivo)
console.log('Fim #01!!!!')

// Função Síncrona
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim #02!!!!')