class Data {
    constructor(dia, mes, ano) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data(8, 12, 2001)
const d2 = new Data(1, 1, 1991)

console.log(d1.exibir())
console.log(d2.exibir())