// abstraction
// abstraction can be done using 2 ways
// 1. interface
// 2. abstract




// abstraction using interface
// idea
interface Vehicle1 {
    // name: string;
    // model: number;
    startEngine(): void
    stopEngnine(): void
    move(): void
}

// const Vehicle1: Vehicle1 = {
//     name: "Toyota",
//     model: 2000
// }

// real implementation
class Car implements Vehicle1 {
    startEngine(): void {
        console.log(" I am starting the car engine")
    }
    stopEngnine(): void {
        console.log("I am stopping the car engine")
    }
    move(): void {
        console.log("i am just testing")
    }
}
const toyotaCar = new Car();
toyotaCar.startEngine();

// abstraction using abstract class
// idea
abstract class Car2 {
    abstract startEngine(): void
    abstract stopEngnine(): void
    abstract move(): void
}

// abstract class can only be followed but you can't make a instance from
// abstract class, it is only used for idea, but to use this you have
// you have to make a child class that extends the abstract class.

// real implementation
class ToyotaCar extends Car2 {
    startEngine(): void {
        console.log(" I am starting the car engine")
    }
    stopEngnine(): void {
        console.log("I am stopping the car engine")
    }
    move(): void {
        console.log("i am just testing")
    }
}
