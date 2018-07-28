function recurse() {
    console.log('recursion!');
    return recurse();
}

recurse(); //this causes stack overflow