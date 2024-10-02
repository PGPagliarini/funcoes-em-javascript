class Data {
    #dia = 1
    #mes = 1
    #ano = 1970

    // Getters/Setters (Pegar ou Obter/Ajustar ou Definir)


    // Getters
    get dia() { return this.#dia }
    get mes() { return this.#mes }
    get ano() { return this.#ano }

    // Setters
    set dia(novoDia) {
        if(novoDia >= 1 && novoDia <= 31) {
            this.#dia = novoDia
        }
    }

    set mes(novoMes) {
        if(novoMes >= 1 && novoMes <= 12) {
            this.#mes = novoMes
        }
    }

    set ano(novoAno) {
        if(novoAno >= 1970 && novoAno <= 2024) {
            this.#ano = novoAno
        }
    }

    exibir () {
        return `${this.#dia}/${this.#mes}/${this.#ano}`
    }
}

const d1 = new Data()
d1.dia = 3
d1.mes = 7
d1.ano = 2003

console.log(d1.dia)
console.log(d1.mes)
console.log(d1.ano)
console.log(d1.exibir(), d1)