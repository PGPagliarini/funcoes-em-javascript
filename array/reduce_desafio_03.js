const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: false },
    { nome: 'Impressora', qtde: 4, preco: 649.50, fragil: false },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lápis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: false },

    { nome: 'Impressora', qtde: 5, preco: 1000, fragil: true },
    { nome: 'iPad', qtde: 2, preco: 7500, fragil: true },
    { nome: 'Computador', qtde: 2, preco: 5000, fragil: true },
]

// 5000 + 15000 + 10000 = 30000 / 3 = 10.000

// filter, map, reduce

// 1. fragil: true (filter)
const ehFragil = item => item.fragil

// 2. qtde * preco -> total (map)
const totalItem = item => item.qtde * item.preco

// 3. media totais (reduce)
const calcularMedia = (total, valor, indice, array) => {
    const tamanho = array.length
    const ultimo = tamanho - 1 === indice
    const novoTotal = total + valor
    return ultimo ? novoTotal / tamanho : novoTotal // Se for o ultimo retornar novoTotal dividido pel tamanho da array, caso contrário retornar apenas o valor do novoTotal
}

const media = carrinho
    .filter(ehFragil)
    .map(totalItem)
    .reduce(calcularMedia)

console.log(media)