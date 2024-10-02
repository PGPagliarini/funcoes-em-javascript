//  Função construtora -> Produto
// nome, preco, desconto (0 - 1)
// precoFinal com desconto aplicado

// Criar duas instâncias de produto (p1, p2 - Nome e preco)


function Produto(nome, preco, desconto = 0) {
    // atributos públicos
    this.nome = nome
    this.preco = preco
    this.desconto = desconto


    this.precoFinal = function () {
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto('Stanley', 300, 0.15) // obj ou instância #1
console.log(p1.nome, p1.precoFinal(), p1)

const p2 = new Produto('Jordan One', 1000, 0.10) // obj ou instância #2
console.log(p2.nome, p2.precoFinal(), p2)

console.log(`A ${p1.nome} tem o preço final de R$ ${p1.precoFinal()} e o ${p2.nome} tem o preço final de R$ ${p2.precoFinal()}.`)