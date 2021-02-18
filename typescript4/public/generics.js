"use strict";
// generics //
const addUid = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docGen = addUid({ name: "yoshi", age: 40 });
// let docTwoGen = addUid("hello");
console.log(docGen.name);
const docThree = {
    uid: 1,
    resourceName: "person",
    data: "shaun"
};
const docFource = {
    uid: 1,
    resourceName: "person",
    data: [
        { name: "shaun", age: 50, phone: "555-5555" }
    ]
};
// ENUMS //
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree3 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: "shaun"
};
const docThree4 = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: "shaun"
};
// TUPLES //
let arrTuples = ["ryu", 25, true];
arrTuples[0] = false;
arrTuples[1] = "ysohu";
arrTuples = [300, false, "yoshu"];
let tup = ["ryu", 25, true];
// tup[0] = 5;
tup[0] = "ken";
let student;
student = ["chun-li", 24234234];
// 
