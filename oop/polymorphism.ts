// polymorphism
// Polymorphism means using a single method or interface
// to handle different types of objects in a flexible way.

class Person {
    getSleep() {
        console.log("I am sleeping for 8 hours per day")
    }
}

class Student extends Person {
    getSleep() {
        console.log("I am sleeping for 7 hours per day")
    }
}
class Developer extends Person {
    getSleep() {
        console.log("I am sleeping for 6 hours per day")
    }
}

const getSleepingHours = (param: Person) => {
    param.getSleep();
}

const person = new Person();
const student = new Student();
const developer = new Developer();
getSleepingHours(person)
getSleepingHours(student)
getSleepingHours(developer)

