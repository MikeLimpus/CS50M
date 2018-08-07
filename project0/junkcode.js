function check() {
	bool = true;
	console.log('check')
}
function uncheck() {
	bool = false;
	console.log('uncheck') 
}

function switcher() {
	console.log('switched')
	if (bool = false) {
		check();
		}
	else if (bool = true){
		uncheck();
	}
}

class ToDo {
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
}
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