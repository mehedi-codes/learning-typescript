"use strict";
//---------------------Type Generics---------------------------------
// Type generics allow you to write code that can work with different data // types while maintaining type safety and reusability.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//! Basic Example and Syntax
// const stringEcho = (arg: string): string => arg
const echo = (arg) => arg;
//! isObject Example
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
const checkBoolvalue = (value) => {
    if (Array.isArray(value) && !value.length) {
        return { value, is: false };
    }
    if (isObj(value) && !Object.keys(value).length) {
        return { value, is: false };
    }
    return { value, is: !!value };
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: "Shorna" }));
// console.log((processUser({name: 'Shorna'})));
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
let array;
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield res.json();
    console.log(getUsersProperty(data, "id"));
});
fetchData();
