// Molde!!!
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const d1 = new Data(8, 12, 2001)
const d2 = new Data(1, 1, 1991)

console.log(d1, typeof d1)
console.log(d2, typeof d2)

console.log(typeof Data)