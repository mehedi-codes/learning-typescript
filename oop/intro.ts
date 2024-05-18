// Object-oriented programming (OOP) in TypeScript is a programming paradigm that uses classes and objects to model real-world entities and their interactions.
// OOP has 4 building blocks. Those are
// 1. Inheritence
// 2. Polymorphism
// 3. Abstraction
// 4. Encapsulation

// OOP - Class and Object
// to create a class we use the keyword class and then following by giving the name of the class just like a normal function
class Animal {
      // bydefault class properties are public
      public name: string;
      public species: string;
      public sound: string;
      constructor(name:string, species:string, sound:string){
        this.name = name,
        this.species = species,
        this.sound = sound
      }
    // this is called an object because this was declared in a class and this function
    // cannnot be an arrow function because arrow function doesn't has this keyword
    makeSound(){
    console.log(`${this.name} is a ${this.species} species and sounds like ${this.sound}`)
}
}

const dog = new Animal("Ms Shanta","Human","Kaw Kaw");
dog.makeSound()

// shortest way to write a class which is simple and minimal no repeated code
class Engineer {
  constructor(
  public name: string,
  public designation: string,
  public age: number,
  public salary: number)
{}
  doCode(){
  console.log(` ${this.name}, who is ${this.age} years old, now works at a company as a ${this.designation} and earns ${this.salary} taka in a month`)
  }
}

const salaryMan = new Engineer("Mehedi Hasan", "Junior Software Engineer", 24, 10000)
salaryMan.doCode()
