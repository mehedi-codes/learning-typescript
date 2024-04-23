//! Type Aliases
type StringOrNumber = string | number;
type StringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string;
  active?: boolean;
  albums: StringOrNumberArray;
};

type UserId = StringOrNumber;

//! Literal types
let myName: "Mehedi";
// myName = 'Hasan' -> Error

let userName: "Mehedi" | "Hasan";

userName = "Mehedi";
userName = "Hasan";
// userName = 'Moon' -> Error

//! Function Type
const add = (a: number, b: number): number => {
  return a + b;
};

const logMessage = (message: any): void => {
  console.log(message);
};

// logMessage("Hello, World!");
// logMessage(100);
// logMessage(add(2, 3));
// logMessage(add('m', 2)); -> Error

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

// works same as mathFunction type but the declaration is different
// interface mathFunction {(a: number, b: number): number}

let multiply: mathFunction = function (c, d) {
  return c * d;
};

// logMessage(multiply(3, 3));

//! optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

//! default parameters
const someAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

// logMessage(addAll(2, 3, 4));
// logMessage(addAll(4, 6));
// logMessage(someAll(undefined, 3));

//! Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

// logMessage(total(10,2,3,4))

//! never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

//! custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

//! use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("This should never happen!");
};
