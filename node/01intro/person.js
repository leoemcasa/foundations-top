class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`my name is ${this.name} e tenho ${this.age} anos`);
    }
}

module.exports = Person;


