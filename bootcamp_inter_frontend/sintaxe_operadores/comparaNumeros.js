function compareNumbers(num1, num2) {
  if (!num1 || !num2) return 'Defina dois números!'
  const firstString = createFirstString(num1, num2)
  const secondString = createSecondString(num1, num2)

  return `${firstString} ${secondString}`
}

function createFirstString(num1, num2) {
  let equalNumbers = ''
  if (num1 !== num2) {
    equalNumbers = 'não'
    return `Os números ${num1} e ${num2} ${equalNumbers} são iguais. `
  }
}

function createSecondString(num1, num2) {
  const sum = num1 + num2
  const compare10 = sum > 10
  const compare20 = sum > 20
  let result10 = 'menor'
  let result20 = 'menor'

  if (compare10) {
    result10 = 'maior'
  }
  if (compare20) {
    result20 = 'maior'
  }

  return `Sua soma é ${sum}, que é ${result10} do que 10 e ${result20} do que 20.`
}

console.log(compareNumbers(1, 8))
