import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// DOM
const anchor = document.querySelector("a");
// if (anchor) {
//     console.log(anchor)
// }
console.log(anchor.href);
// const formDom = document.querySelector("form");
const formDom = document.querySelector(".new-item-form");
console.log(formDom.children);
//input //
const typeInput = document.querySelector("#type");
const typeInputToForm = document.querySelector("#toform");
const typeInputdetail = document.querySelector("#detail");
const typeInputamount = document.querySelector("#amount");
const ulLi = document.querySelector('ul');
const listLi = new ListTemplate(ulLi);
formDom.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [typeInputToForm.value, typeInputdetail.value, typeInputamount.valueAsNumber];
    let doc;
    if (typeInput.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(typeInputToForm.value, typeInputdetail.value, typeInputamount.valueAsNumber);
    }
    console.log(doc);
    listLi.render(doc, typeInputToForm.value, "end");
    // console.log(
    //     typeInput.value,
    //     typeInputToForm.value,
    //     typeInputdetail.value,
    //     typeInputamount.valueAsNumber
    // )
});
const thisIsMe = {
    name: "shawn",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    }
};
const greedInterfacePerson = (person) => {
    console.log("hello " + person.name);
};
greedInterfacePerson(thisIsMe);
let thisIsSomeone;
// classes //
let docOneC;
let docTwoC;
docOneC = new Invoice("yoshi", "web work", 250);
docTwoC = new Payment("mario", "plumbing", 200);
let docsArrayC = [];
docsArrayC.push(docOneC, docTwoC);
const invOne = new Invoice("john smith", "phone bill", 100);
const invTwo = new Invoice("james", "tv bill", 150);
invOne.format();
invTwo.format();
let invoices = [];
// invoices.push("hihi");
invoices.push(invOne);
invoices.push(invTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.details, inv.details, inv.format())
// })
invoices.forEach(inv => {
    console.log(inv.format());
});
