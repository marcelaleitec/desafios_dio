function getAdmins(map) {
  let admins = []
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key)
    }
  }
  return admins
}

const usuarios = new Map()

usuarios.set('Maria', 'Admin')
usuarios.set('Pedro', 'User')
usuarios.set('Joao', 'Admin')
usuarios.set('Thiago', 'User')

console.log(getAdmins(usuarios))
