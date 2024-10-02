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

const d1 = new Data('Opa', 120, -1253)
d1.ano = false
console.log(d1.exibir())