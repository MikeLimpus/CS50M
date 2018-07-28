//console.log(thisIsAConst) //this won't work, outside of scope
console.log(thisIsAVar); //doesn't error, reads as undefined 
thisIsHoisted();         //works properly

const thisIsAConst = 50
thisIsAlsoAVariable = 'hi' //global variable
//thisIsAConst++ //error

const constObj = {}

constObj.a = 'a'

let thisIsALet = 50
thisIsALet =51 //okay

//let thisIsALet = 34 //not okay, name already declared

//vars are older and not as safe
var thisIsAVar = 50
thisIsAVar = 30
var thisIsAVar = 40 //Okay

function thisIsHoisted() {
    console.log('this is a function at the bottom of file')
}

const thisIsNotHoisted = function() { //declared as const, this won't hoist
    console.log('should this be hoisted?')
}