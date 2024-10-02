function bomDia() {
    console.log('Bom Dia!')
}

// Function Expression
const boaTarde = function() {
    console.log('Boa Tarde!')
}

// Passar uma função como parâmetro para outra função
function executar(x) {
    if(typeof x === 'function') {
        x()
    }
}

executar(1)
executar('Não executa!')
executar(bomDia)
executar(boaTarde)

// Retornar uma função a partir de uma outra função
function potencia(exp) {
    // parte da lógica!!!
    
    return function (base) {
        return Math.pow(base, exp)
    }
}

const aoQuadrado = potencia(2)
console.log(aoQuadrado(6))
console.log(aoQuadrado(7))

const aoCubo = potencia(3)
console.log(aoCubo(4))
console.log(aoCubo(5))

const resultado = potencia(3)(10) // 10x10x10
console.log(resultado)