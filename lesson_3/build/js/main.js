"use strict";
let stringArr = ['one', 'hey', 'mehedi'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = "jhon";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
guitars = stringArr;
mixedData = guitars;
let test = [];
let bands = [];
bands.push("Van Halen");
// Tuple
let myTuple = ["one", 1, true];
let mixed = ['john', 1, true];
mixed = myTuple;
// myTuple = mixed
myTuple[1] = 42;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj); // object
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
exampleObj.prop1 = 'John';
exampleObj.prop2 = true;
let evh = {
    name: "Eddie",
    active: true,
    albums: [1984, 5150, "OU812"]
};
let jp = {
    name: "Jimmy",
    active: false,
    albums: [1976, 5150, "OU812"]
};
evh = jp;
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(evh)); // Hello Jimmy!
let jp2 = {
    active: false,
    albums: [1976, 5150, "OU812"]
};
const greetGuitarist2 = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase}!`;
    }
    return `Hello!`;
};
console.log(greetGuitarist2(jp2));
// Enums
// Unlike most typescript features, Enums are not a type-level addition to Javascript but something added to the language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 2] = "U";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["C"] = 4] = "C";
    Grade[Grade["B"] = 5] = "B";
    Grade[Grade["A"] = 6] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); //2
console.log(Grade.D); //3
console.log(Grade.A); //6
