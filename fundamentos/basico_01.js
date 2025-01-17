const a = 4
console.log(a)

// Function Declaration
function bomDia() {
    console.log('Bom Dia!')
}

bomDia()

// Function Expression
const boaTarde = function() {
    console.log('Boa Tarde!')
}

boaTarde() // Undefined

function somar(a = 0, b = 0) {
    return a + b
}

let resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3)
console.log(resultado)

resultado = somar(3, 4, 5, 6, 7)
console.log(resultado)

resultado = somar()
console.log(resultado)