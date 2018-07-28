//Objects

const o = new Object()
o.firstName = "Mike"
o.lastName = "Limpus"
o.isTeaching = false
o.greet = function() {
    console.log('hi')
}

const o2 = {} //Object literal, easier to read
o.firstName = 'Mike'
o['lastName'] = 'Limpus'
const key = "isTeaching"
o[key] = false;
o['greet'] = function(){
    console.log('hi')
}

const o3 = {
    firstName: 'Mike',
    lastName : 'Limpus',
    isTeaching : false,
    greet : function() {
        console.log('hi')
    },
    address: { //Nested objects are OK
        street: "Main St",
        number : 123,
    }
}

o3.address          //calling this would return 'street' and 'number' values
o3.address.number   //Would return 123 