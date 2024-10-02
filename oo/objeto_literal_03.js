// Problema da utilização de Objetos Literais

const usuario1 = {
    nome: 'Paulo',
    email: 'paulo@gmail.com',
    senha: '12345',
    cadastro: new Date()    
}

const usuario2 = {
    nome: 'Izabella',
    email: 'izabella@hotmail.com',
    dataCadastro: new Date()
}

console.log(usuario1, usuario2)