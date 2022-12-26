import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildVisible = false
    name = ""

    constructor () {
        super()
        console.log("Parent constructor called.");
    }
    connectedCallback() {
        console.log("Parent connectedCallBack invoked");
    }

    renderedCallback() {
        console.log("Parent renderCallBack invoked");
    }

    changeHandler(event) {
        this.name = event.target.value
    }

    handleShowChild() {
        this.isChildVisible = !this.isChildVisible
    }
    errorCallback(error, stack) {
        console.log(error.message);
        console.log(stack);
    }
}