"use strict";
// let character = "mario";
// let age = 30;
// let isBlackBelt = false;
// character = "luigi";
// age = 5;
// isBlackBelt = true;
// const circ = (diameter: number):number => {
//     return diameter * Math.PI;
// }
// explicit types
let character;
let age;
let isLoggedIn;
// arrays 
let ninjas = [];
// union types
let mixed = [];
let uid;
uid = 5;
uid = "ffsdf";
// objects
let ninjaone;
ninjaone = { name: "yoshi", age: 30 };
let ninjaTwo;
ninjaTwo = { name: "mario", age: 20, beltColor: "black" };
// dynamic types
let ages = 25;
ages = true;
ages = "hello";
let mixedD = [];
mixedD.push(5);
mixedD.push(false);
mixedD.push("jkkj");
let ninjaD;
ninjaD = { name: true, age: true };
console.log("hihihii");
const hey = "dsff";
// functions //
let greetFunc;
greetFunc = () => {
    console.log("hello, from function");
};
const addFunc = (a, b, c) => {
    console.log(c);
    console.log(a + b);
};
addFunc(5, 10);
addFunc(5, 10);
const minusFunc = (a, b) => {
    return a - b;
};
let resultFunc = minusFunc(10, 7);
// function signatures //
let greet2;
let greet3;
greet3 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calcFunc;
calcFunc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetailsFunc;
logDetailsFunc = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
const logDetailsAlias = (uid, item) => {
    console.log(item + " has this id :" + uid);
};
const logDetailsAlias2 = (user) => {
    console.log(user.name);
};
