import { LightningElement } from 'lwc';

export default class ChildLifecycle extends LightningElement {
    constructor () {
        super()
        console.log("Child constructor called.");
    }
    connectedCallback() {
        console.log("Child connectedCallBack invoked");
        throw new Error("loading of child component fail");
    }
    renderedCallback() {
        console.log("Child renderCallBack invoked");
    }
    disconnectedCallback() {
        alert("Child component will be removed!!");
        console.log("Child disconnectedCall back invoked");
    }
}