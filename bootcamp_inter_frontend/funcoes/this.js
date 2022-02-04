function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`
}

const bebe1 = {
  nome: 'Maria',
  idade: 2
}

const bebe2 = {
  nome: 'Carla',
  idade: 0.5
}
const animal = {
  nome: 'Tom',
  idade: 10,
  raca: 'Siames'
}

console.log(calculaIdade.apply(bebe2, [5]))
