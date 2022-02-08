function sumNumbers(arr) {
  if (!arr || !arr.length) return
  const soma = arr.reduce((prev, curr) => prev + curr)

  return soma
}

console.log(sumNumbers([1, 1, 1, 3]))
