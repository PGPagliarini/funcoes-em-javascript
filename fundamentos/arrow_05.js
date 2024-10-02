const bomDia = () => 'Bom Dia!'
const boaTarde = () => 'Boa Tarde!'


const executar = (fn) => fn()


let resultado = executar(bomDia)
console.log(resultado)

resultado = executar(boaTarde)
console.log(resultado)