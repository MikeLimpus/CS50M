let todoList = []; 	//Array to store todos
let listIndex = 0;	//Used to store number of items in the list
let uncheckedListIndex = 0;
let bool = false;
/*class ToDo {
  constructor(name, info, check) {
    this.name = name;
		this.info = info;
		this.check = Boolean(check);
  }
	checker() {
		if(this.check = true) {
			this.check = Boolean(false);
			console.log("this check should now equal false")
		}
		else if (this.check = false) {
			this.check = Boolean(true);
			console.log("this check should now equal true")
		}
		else {
			console.log("This checker() isn't working")
		}
	}
}*/
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')



function newTodo() {   
	listIndex++; 			//increment list index, first function call should = 1
	uncheckedListIndex++;
	let x;		//temp variable for checkbox bool
	itemCountSpan.textContent = listIndex;
	uncheckedCountSpan.textContent = uncheckedListIndex;
  /*Input string to variable*/
	let toDoString = window.prompt('Input what you need to do here'); 	
	/*Object to be defined as a TODO, includes string with name and info*/ 
	//const todo = new ToDo("TODO" + listIndex, toDoString, Boolean(x));
	const todo = {} 
		todo.name = "TODO" + listIndex;
		todo.info = toDoString;
		//todo.checked = false;	
		//todo.checker = function() { 
			//if(todo.checker = false) {
				//console.log("True");
				//return true;
		//	}
			//else {
				//console.log("False");
				//return false;
			//}
		//}	
	list.innerHTML += '<input type="checkbox" class=todo-checkbox value="TODO">' + todo.info + '<br>';
	todoList.push(todo);
	
}
