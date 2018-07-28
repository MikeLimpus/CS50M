//CS50M Lesson 0
//JS syntax 

const firstName = "Mike";   //const is OK typename
const val = 42              //In JS, semicolons are optional

const arr = [               //Array syntax
    'string',               //single or double quotes are fine for string
    42,                     //Arrays can hold many types...
    function() {console.log('hi')}, //Including functions
]
arr[2]()                      //base zero index. this will call function()
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


