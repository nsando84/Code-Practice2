
function getSum(a: number , b: number):number {
    return a + b
};

// console.log(getSum(1, 4));

let mySum = function(num1: any, num2: any):number {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    };

    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    };

    return num1 + num2;
}

// console.log(mySum(3, "5"));

function getName(firstName: string, lastName?: string):string {
    return lastName ? firstName + " " + lastName : firstName; 
}

// console.log(getName("john", "djoe"));

function myVoided():void {
    return;
}

console.log(myVoided())