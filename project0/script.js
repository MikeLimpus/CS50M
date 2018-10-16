/*
 * Jonathan Limpus
 * edX CS50M Project 0
 * script.js
 */

let todoList = []; 	//Array to store todos
let listIndex = 0;	//Used to store number of items in the list
let uncheckedListIndex = 0;

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function checker(todoNum){}

function newTodo() {
	listIndex++; 		//increment list index, first function call should = 1
	uncheckedListIndex++;
	
	itemCountSpan.textContent = listIndex;
	uncheckedCountSpan.textContent = uncheckedListIndex;
  	/*Input string to variable*/
	let toDoString = window.prompt('Input what you need to do here');
	/*Object to be defined as a TODO, includes string with name and info*/
	const todo = {}
		todo.name = "TODO" + listIndex;
		todo.info = toDoString;
	//let box = $('#checkbox')
	list.innerHTML += `
		<input type="checkbox"
		class="todo-checkbox"
		id= "TODO ${listIndex}"
		onClick="checker(${listIndex})">
		${todo.info} <br>`;
		function checker(todoNum) {
			if ($(`TODO ${todoNum}.is(":checked"`)) {
				uncheckedCountSpan++;
			}
			else {
				uncheckedCountSpan--;
			}
		}
	todoList.push(todo);
}



/*
<li>
	<input type="checkbox" />
	<button>delete</button>
	<span>text</span>
</li>
*/

/*
 * Known bugs
 * Unchecked counter decrements regardless of check box
 * itemCountSpan increments regardless of if a new todo is actually created or
 * not
 */