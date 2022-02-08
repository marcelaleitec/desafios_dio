const orange = {
  price: 2
}

const apple = {
  price: 3
}

function mapArray() {
  const array = [1, 2, 3, 4, 5]

  return array.map(function (item) {
    return item * this.price
  }, orange)
}

console.log(mapArray())
