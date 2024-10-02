// somar(3)(4)(5)

// const somar = a => {
//     return b => {
//         return c => a + b + c
//     }
// }

// const somar = a => {
//     return b => c => a + b + c
// }

const somar = a => b => c => a + b + c

console.log(somar(13)(14)(15))

const subtrair = (a, b) => a - b
const bomDia = () => 'Bom dia!'

console.log(subtrair(6, 5))
console.log(bomDia())