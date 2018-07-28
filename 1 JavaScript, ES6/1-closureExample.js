function makeHelloFunction() {
    const message = 'Hello'

    function sayHello() {
        console.log(message)
    }

    return sayHello
}

const sayHello = makeHelloFunction()

//console.log(message)  //Causes error
console.log('typeof message:', typeof message);
console.log(sayHello.toString()) 

sayHello()