
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

formDom.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    console.log(
        typeInput.value,
        typeInputToForm.value,
        typeInputdetail.value,
        typeInputamount.valueAsNumber
    )
})

// classes //

class Invoice {

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    // readonly client: string;
    // readonly details: string;
    // readonly amount: number;
    
    // constructor(client: string, details: string, amount: number) {
    //     this.client = client;
    //     this.details = details;
    //     this.amount = amount;

    // }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }

}

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

