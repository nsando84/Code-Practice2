
import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {

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