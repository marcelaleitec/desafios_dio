var currentNumber = 0

document.getElementById('adicionar').addEventListener('click', function () {
  if (currentNumber < 10) {
    currentNumber = currentNumber + 1
    document.getElementById('currentNumber').innerHTML = currentNumber
  }
  if (currentNumber >= 0) {
    document.getElementById('currentNumber').style.color = 'blue'
  }
})

document.getElementById('subtrair').addEventListener('click', function () {
  if (currentNumber > -5) {
    currentNumber = currentNumber - 1
    document.getElementById('currentNumber').innerHTML = currentNumber
    if (currentNumber < 0) {
      document.getElementById('currentNumber').style.color = 'red'
    }
  }
})
