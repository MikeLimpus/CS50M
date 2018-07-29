const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let todoList = []; //Array to store todos

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  /*
   *code will go here
   *may want to use dynamic arrays using push function
   *to store todos as strings
   */ 
  let todo = window.prompt(todo);
  todoList.push(todo)
  //alert('New TODO button clicked!')
}
