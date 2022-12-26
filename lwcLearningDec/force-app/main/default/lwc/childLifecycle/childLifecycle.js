import { LightningElement } from 'lwc';

export default class ChildLifecycle extends LightningElement {
    constructor () {
        super()
        console.log("Child constructor called.");
    }
    connectedCallback() {
        console.log("Child connectedCallBack invoked");
    }
    renderedCallback() {
        console.log("Child renderCallBack invoked");
    }
}