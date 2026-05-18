// localStorage.setItem("username", "Ashik")
// const user =
//   localStorage.getItem("username")

// console.log(user)

// // Remove Item from local Storage
// localStorage.removeItem("username")

const user = {
  name: "Ashik",
  age: 24
}

localStorage.setItem(
  "user",
  JSON.stringify(user)
)

const todos = [
  "Learn JS",
  "Practice React"
]

localStorage.setItem(
  "todos",
  JSON.stringify(todos)
)

const savedTodos =
  JSON.parse(localStorage.getItem("todos"))

console.log(savedTodos)

