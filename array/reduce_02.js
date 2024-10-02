const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 4, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lápis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const totalProduto = produto => produto.qtde * produto.preco
const totalizar = (total, valor) => total + valor

const precoTotal = carrinho.map(totalProduto).reduce(totalizar, 0)

console.log(precoTotal)