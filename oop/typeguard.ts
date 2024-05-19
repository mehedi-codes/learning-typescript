// Type Guard or Type Narrowing (typeof & in)


//typeof guard
const add = (param1: string | number, param2: string | number):
  string | number => {

  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString()
  }

}

// console.log(add(1,2)) // 3
// console.log(add(1,"2")) // "12"

// in guard
type NormalUser = {
  name: string
}

type AdminUser = {
  name: string,
  role: "admin"
}

const getUser = (user: NormalUser | AdminUser) => {
  if("role" in user){
    console.log(`My name is ${user.name} and my role is ${user.role}`)
  }else{
    console.log(`My name is ${user.name}`)
  }
}
getUser({name: "Mehedi", role: "admin"})
getUser({name: "Mehedi Hasan"})

// instance of guard
class Animal {
    constructor(public name: string, public species: string) { }
    makeSound() {
        console.log("I am making sound")
    }
}

class Dog extends Animal {
    constructor(name: string, species: string) { super(name, species) }
    makeBark() {
        console.log("I am barking")
    }
}
class Cat extends Animal {
    constructor(name: string, species: string) { super(name, species) }
    makeMeaw() {
        console.log("I am meawing")
    }
}

const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
}
const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
}


const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
        animal.makeBark();
    } else if (isCat(animal)) {
        animal.makeMeaw()
    } else {
        animal.makeSound()
    }
}
const dog = new Dog("Dog Bhai", "dog")
const cat = new Cat("Cat Vai", "cat")

getAnimal(dog)
getAnimal(cat)
