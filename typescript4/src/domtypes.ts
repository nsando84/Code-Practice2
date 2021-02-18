
import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter'


// DOM


const anchor = document.querySelector("a")!;


// if (anchor) {
//     console.log(anchor)
// }

console.log(anchor.href)

// const formDom = document.querySelector("form");
const formDom = document.querySelector(".new-item-form") as HTMLFormElement;

console.log(formDom.children);

//input //

const typeInput = document.querySelector("#type") as HTMLSelectElement;

const typeInputToForm = document.querySelector("#toform") as HTMLInputElement;
const typeInputdetail = document.querySelector("#detail") as HTMLInputElement;
const typeInputamount = document.querySelector("#amount") as HTMLInputElement;

const ulLi = document.querySelector('ul')!;
const listLi = new ListTemplate(ulLi)

formDom.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let values: [string, string, number]
    
    values = [typeInputToForm.value, typeInputdetail.value, typeInputamount.valueAsNumber]

    let doc: HasFormatter;
    if (typeInput.value === "invoice") {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(typeInputToForm.value, typeInputdetail.value, typeInputamount.valueAsNumber)
    }

    console.log(doc);

    listLi.render(doc, typeInputToForm.value, "end");

    // console.log(
    //     typeInput.value,
    //     typeInputToForm.value,
    //     typeInputdetail.value,
    //     typeInputamount.valueAsNumber
    // )
})

// interfaces //

interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): void;
}

const thisIsMe: IsPerson = {
    name: "shawn",
    age: 30,
    speak(text: string):void { 
        console.log(text)
    },
    spend(amount: number):number {
        return amount;
    }
};

const greedInterfacePerson = (person: IsPerson) => {
    console.log("hello " + person.name)
}

greedInterfacePerson(thisIsMe);

let thisIsSomeone: IsPerson;


// classes //

let docOneC: HasFormatter;
let docTwoC: HasFormatter;

docOneC = new Invoice("yoshi", "web work", 250);
docTwoC = new Payment("mario", "plumbing", 200);

let docsArrayC: HasFormatter[] = [];

docsArrayC.push(docOneC, docTwoC);

const invOne = new Invoice("john smith", "phone bill", 100);
const invTwo = new Invoice("james", "tv bill", 150);

invOne.format();
invTwo.format();

let invoices: Invoice[] = []

// invoices.push("hihi");
invoices.push(invOne);
invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.details, inv.details, inv.format())
// })

invoices.forEach(inv => {
    console.log(inv.format())
})

