// Encapsulation 
// Encapsulation means bundling data and the methods that operate on that data
// into a single unit (like a class) and restricting access to some of the 
//  object's components to protect the data from being modified directly.

class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Public method to get the name
    public getName(): string {
        return this.name;
    }

    // Public method to set the name
    public setName(name: string): void {
        this.name = name;
    }

    // Public method to get the age
    public getAge(): number {
        return this.age;
    }

    // Public method to set the age
    public setAge(age: number): void {
        if (age > 0) {
            this.age = age;
        } else {
            console.log("Age must be positive.");
        }
    }
}

const person = new Person("Alice", 30);

console.log(person.getName()); // Output: Alice
console.log(person.getAge()); // Output: 30

person.setName("Bob");
person.setAge(35);

console.log(person.getName()); // Output: Bob
console.log(person.getAge()); // Output: 35

person.setAge(-5); // Output: Age must be positive.
console.log(person.getAge()); // Output: 35
