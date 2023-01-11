// Module wrapper
// (function (exports, require, module, _filename, _dirname) {

// })

// console.log(__filename, __dirname);

class Person  {

    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    greeting()
    {
        console.log(`My name is ${this.name} and i am ${this.age}`)
    }
}


module.exports = Person;