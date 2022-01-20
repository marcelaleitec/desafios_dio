const formTasks = document.getElementById('formTasks')
const listTasks = document.getElementById('listTasks')

formTasks.onsubmit = function (e) {
  e.preventDefault()
  const inputField = document.getElementById('writeTasks')
  addTask(inputField.value)
  formTasks.reset()
}

function addTask(description) {
  const taskContainer = document.createElement('div')
  const newTask = document.createElement('input')
  const taskLabel = document.createElement('label')
  const taskDescriptionNode = document.createTextNode(description)

  newTask.setAttribute('type', 'checkbox')
  newTask.setAttribute('name', description)
  newTask.setAttribute('id', description)

  taskLabel.setAttribute('for', description)
  taskLabel.appendChild(taskDescriptionNode)

  taskContainer.classList.add('task-item')
  taskContainer.appendChild(newTask)
  taskContainer.appendChild(taskLabel)

  listTasks.appendChild(taskContainer)
}
