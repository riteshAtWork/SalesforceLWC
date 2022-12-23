import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false;
    greet;
    handleClick() {
        this.isVisible = !this.isVisible;
    }

    askHello(event) { 
        this.greet = event.target.value;
    }

    get showMessage() { 
        return this.greet == "hello";
    }
}