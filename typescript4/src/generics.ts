
// generics //

const addUid = <T extends {name: string, age: number}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid}
}

let docGen = addUid({name: "yoshi", age: 40});
// let docTwoGen = addUid("hello");

console.log(docGen.name)

interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: "person",
    data: "shaun"
}

const docFource: Resource<object[]> = {
    uid: 1,
    resourceName: "person",
    data: [
        {name: "shaun", age: 50, phone: "555-5555"}
    ]
}


// ENUMS //

enum ResourceType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON
}

interface Resources<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docThree3: Resources<string> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: "shaun"
}


const docThree4: Resources<string> = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: "shaun"
}

// TUPLES //

let arrTuples = ["ryu", 25, true];
arrTuples[0] = false;
arrTuples[1] = "ysohu";
arrTuples = [ 300, false, "yoshu"]

let tup:[ string, number, boolean] = ["ryu", 25, true];

// tup[0] = 5;
tup[0] = "ken";


let student: [string, number];

student = ["chun-li", 24234234];


// 