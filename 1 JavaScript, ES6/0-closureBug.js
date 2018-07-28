function makeFunctionArray() {
    const arr = []

    for (var i = 0; i < 5; i++) {
        arr.push(function() {console.log(i)})
    }
    console.log(i) //value is 5
    return arr
}

const functionArr = makeFunctionArray()

//console.log(i) //would be undefined

functionArr[0]()


/*this will console log 5, not 1*/