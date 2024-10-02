function Data(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano

    // Comportamento(Método) Público(Está disponível fora do objeto)
    this.exibir = function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data(12, 1, 2024) 
const d2 = new Data(16, 8, 2020) 

d1.mes = 6
d1.ano = 2029

console.log(d1.exibir())
console.log(d2.exibir())