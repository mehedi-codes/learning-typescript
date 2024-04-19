"use strict";
//! Literal types
let myName;
// myName = 'Hasan' -> Error
let userName;
userName = "Mehedi";
userName = "Hasan";
// userName = 'Moon' -> Error
//! Function Type
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
// logMessage("Hello, World!");
// logMessage(100);
// logMessage(add(2, 3));
// logMessage(add('m', 2)); -> Error
let subtract = function (c, d) {
    return c - d;
};
// works same as mathFunction type but the declaration is different
// interface mathFunction {(a: number, b: number): number}
let multiply = function (c, d) {
    return c * d;
};
// logMessage(multiply(3, 3));
//! optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//! default parameters
const someAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
// logMessage(addAll(2, 3, 4));
// logMessage(addAll(4, 6));
// logMessage(someAll(undefined, 3));
//! Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
// logMessage(total(10,2,3,4))
//! never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//! custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
//! use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("This should never happen!");
};
