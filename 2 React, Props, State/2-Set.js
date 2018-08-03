//We can also extend the native implementation of Set if we wanted to 
//do something like log on addition or create new methods

class MySet extends Set {
    constructor(arr) {
        super(arr)
        this.originalArray = arr
    }
    add(val) {
        super.add(val)
        console.log('added ${val} to the set')
    }

    toArray() {
        return Array.from(this)
    }
    reset() {
        return new MySet(this.originalArray)
    }
}