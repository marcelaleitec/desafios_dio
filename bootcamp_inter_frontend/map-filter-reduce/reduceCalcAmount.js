function calcAmount(amount, itens) {
  if (!amount || !itens || !itens.length) return 'Envie todos os parâmetros'

  const totalAmount = itens.reduce((prev, item) => prev - item.price, amount)

  return `O saldo final será de ${totalAmount} reais`
}

list = [
  {
    price: 5,
    name: 'maçã'
  },
  {
    price: 30,
    name: 'roupa'
  },
  {
    price: 25,
    name: 'carne'
  }
]

amount = 100

console.log(calcAmount(amount, list))
