// fn -> 3 * 7
const multiplicacao = (a, b) => a * b
console.log(multiplicacao(3, 7))

// fn -> 3 + 7
const soma = (a, b) => a + b
console.log(soma(3, 7))

// fn -> 7 - 3
const subtracao = (a, b) => a - b
console.log(subtracao(7, 3))

// fn -> 7 / 3
const divisao = (a, b) => a / b
console.log(divisao(7, 3))

// calcular(3)(7)(fn)
const calcular = a => b => fn => fn(a, b)


console.log(calcular(10)(7)(multiplicacao))
console.log(calcular(10)(7)(soma))
console.log(calcular(10)(7)(subtracao))
console.log(calcular(10)(7)(divisao))