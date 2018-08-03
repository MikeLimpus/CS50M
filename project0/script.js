const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let todoList = []; 	//Array to store todos
let listIndex = 0;	//Used to store number of items in the list

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {   
  listIndex++; 			//increment list index, first function call should = 1
  itemCountSpan.textContent = listIndex;
  /*Input string to variable*/
	let toDoString = window.prompt('Input what you need to do here'); 
	/*Object to be defined as a TODO, includes string with info*/ 
	const todo = {}
		todo.name = "TODO " + listIndex; 
    todo.info = toDoString;
  list.innerHTML += '<input type="checkbox" name="TODO" value="TODO">' + todo.info + '<br>';
    //"<h4>" + todo.name + "</h4>"  +
    //"<p>" + todo.info + "</p>";
  todoList.push(todo);
}


/*
 * Known bugs:
 * Item count is incremented regardless of whether new item is actually added
 */