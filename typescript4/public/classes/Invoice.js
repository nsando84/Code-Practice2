export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
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
