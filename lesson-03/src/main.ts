let stringArr = ['one', 'hey', 'mehedi'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

stringArr[0] = "jhon";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

guitars = stringArr
mixedData = guitars

let test = [];

let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["one", 1, true];

let mixed = ['john', 1, true];

mixed = myTuple
// myTuple = mixed

myTuple[1] = 42;


// Objects

let myObj: object;

myObj = [];

console.log(typeof myObj); // object

myObj = bands

myObj = {}

const exampleObj = {
  prop1: 'Dave',
  prop2: true,
}

exampleObj.prop1 = 'John'
exampleObj.prop2 = true


// custom type

type Guitarist = {
  name: string,
  active?: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: "Eddie",
  active: true,
  albums: [1984, 5150, "OU812"]
}

let jp: Guitarist = {
  name: "Jimmy",
  active: false,
  albums: [1976, 5150, "OU812"]
}

evh = jp

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(evh)); // Hello Jimmy!

// interface (similar to type)

interface Guitarist2 {
  name?: string,
  active: boolean,
  albums: (string | number)[]
}
let jp2: Guitarist2 = {
  active: false,
  albums: [1976, 5150, "OU812"]
}
const greetGuitarist2 = (guitarist: Guitarist2) => {
  if(guitarist.name){
    return `Hello ${guitarist.name?.toUpperCase}!`
  }
  return `Hello!`
}

console.log(greetGuitarist2(jp2));



// Enums
// Unlike most typescript features, Enums are not a type-level addition to Javascript but something added to the language and runtime.

enum Grade {
  U = 2,
  D,
  C,
  B,
  A
}

console.log(Grade.U); //2
console.log(Grade.D); //3
console.log(Grade.A); //6
