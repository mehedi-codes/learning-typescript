//---------------------Type Generics---------------------------------
// Type generics allow you to write code that can work with different data // types while maintaining type safety and reusability.

//! Basic Example and Syntax
// const stringEcho = (arg: string): string => arg
const echo = <T>(arg: T): T => arg;

//! isObject Example
const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// console.log(isObj(true)); // false
// console.log(isObj('Mehedi')); // false
// console.log(isObj([1,2,3])); // false
// console.log(isObj({name: 'Mehedi'})); // true
// console.log(isObj(null)); // false

//! isTrue with keyof Assertion
// const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
//   if (Array.isArray(arg) && !arg.length) {
//     return { arg, is: false };
//   }
//   if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//     return { arg, is: false };
//   }
//   return { arg, is: !!arg };
// };

// console.log(isTrue(false));
// console.log(isTrue(0));
// console.log(isTrue(true));
// console.log(isTrue(1));
// console.log(isTrue('Shanta'));
// console.log(isTrue(''));
// console.log(isTrue(null));
// console.log(isTrue(undefined));
// console.log(isTrue({}));
// console.log(isTrue({name: 'Shorna'}));
// console.log(isTrue([]));
// console.log(isTrue([1,2,3]));
// console.log(isTrue(NaN));
// console.log(isTrue(-0));

// interface with Generic example
interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolvalue = <T>(value: T): BoolCheck<T> => {
  if (Array.isArray(value) && !value.length) {
    return { value, is: false };
  }
  if (isObj(value) && !Object.keys(value as keyof T).length) {
    return { value, is: false };
  }
  return { value, is: !!value };
};

//! Narrowing Generics with Extends
interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  // process the user with logic here
  return user;
};

console.log(processUser({ id: 1, name: "Shorna" }));
// console.log((processUser({name: 'Shorna'})));

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

let array;

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(getUsersProperty(data, "id"));
};
fetchData();
