const person = {
    name :'jordan',
    greet: function() {console.log('hello, ' + this.name) },
}

person.greet();

const friend = {
    name: 'david',
}

friend.greet = person.greet;

friend.greet(); 

const greet = person.greet.bind({name: 'this is a bound object'})

const newPerson = {
    name: 'newPerson',
    greet: () => {console.log('hi ' + this.name) },
}

greet();
newPerson.greet();