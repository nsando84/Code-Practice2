

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

let character: string;
let age: number;
let isLoggedIn: boolean;


// arrays 

let ninjas: string[] = [];


// union types

let mixed: (string | number | boolean)[] = []

let uid: string | number;
uid = 5;
uid = "ffsdf";

// objects

let ninjaone: object;

ninjaone = {name: "yoshi", age: 30}

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {name: "mario", age: 20, beltColor: "black"}

// dynamic types

let ages: any = 25;

ages = true;
ages = "hello"

let mixedD: any[] = [];
mixedD.push(5);
mixedD.push(false);
mixedD.push("jkkj");

let ninjaD: {name: any, age: any};

ninjaD = {name: true, age: true};

console.log("hihihii")

const hey = "dsff"

// functions //

let greetFunc: Function;

greetFunc = () => {
    console.log("hello, from function")
};

const addFunc = (a: number, b: number, c?: number|string):void => {
    console.log(c);
    console.log(a + b);
}

addFunc(5, 10);
addFunc(5, 10);

const minusFunc = (a:number, b:number):number => {
    return a - b;
}

let resultFunc = minusFunc(10, 7);


// function signatures //

let greet2: Function;

let greet3: (a:string, b:string) => void

greet3 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}


 let calcFunc: (a:number, b:number, c:string) => number;

 calcFunc = (numOne: number, numTwo: number, action: string) => {
     if (action === "add") {
         return numOne + numTwo;
     } else {
         return numOne - numTwo;
     }
 }

 let logDetailsFunc: (obj: {name: string, age: number}) => void;

type personFunc = {name: string, age: number}

 logDetailsFunc = (ninja: personFunc) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
 };

// alias //


type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum}

const logDetailsAlias = (uid: StringOrNum, item: StringOrNum) => {
    console.log(item + " has this id :" + uid)
}

const logDetailsAlias2 = (user: objWithName) => {
    console.log(user.name)
}

