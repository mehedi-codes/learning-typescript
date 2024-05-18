// OOP - Inheritence
class Parent {
    constructor(
        public name: string,
        public age: number,
        public address: string,
    ) { }
    getSleep(numOfHours: number) {
        console.log(`${this.name} will sleep for ${numOfHours} ${numOfHours > 1 ? "hours" : "hour"}`)
    }
}

class Student extends Parent {
    constructor(
        public name: string,
        public age: number,
        public address: string) {
        super(name, age, address)
    }
    getSleep(numOfHours: number) {
        console.log(`${this.name} will sleep for ${numOfHours} ${numOfHours > 1 ? "hours" : "hour"}`)
    }
}

class Teacher extends Parent {
    constructor(
        public name: string,
        public age: number,
        public address: string,
        public designation: string
    ) { super(name, age, address) }
    takeClass(numOfClass: number) {
        console.log(`${this.name} will take ${numOfClass} ${numOfClass > 1 ? "classes" : "class"}. His designation is ${this.designation}`)
    }
}

const student1 = new Student("Mehedi", 23, "Shymoli");
student1.getSleep(8)
const teacher1 = new Teacher("Jhankar", 40, "Dhanmondi", "HomeRoom Teacher")
teacher1.takeClass(16)

