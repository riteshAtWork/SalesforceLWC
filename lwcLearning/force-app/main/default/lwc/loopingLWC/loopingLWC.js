import { LightningElement } from 'lwc';

export default class LoopingLWC extends LightningElement {

    cars = ["Ford", "Tata", "Maruti", "Mahindra", "Force", "Hyundai", "Kia", "Renault"];

    ceos = [
        {
            id: 1,
            company: "Google",
            name: "Sundar Pichai"
        },
        {
            id: 2,
            company: "Apple Inc.",
            name: "Tim Cook"
        },
        {
            id: 3,
            company: "Salesforce",
            name: "Marc Benioff"
        }
    ]
}