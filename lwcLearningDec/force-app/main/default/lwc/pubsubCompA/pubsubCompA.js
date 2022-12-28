import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubCompA extends LightningElement {
    message;

    inputHandler(event) {
        this.message = event.target.value;
        console.log("message is ::::", this.message);
    }

    publishHandler() {
        if (!this.message) {
            console.log("message is not defined please initialize it");
        } else {
            console.log("check pubsub comp A :::", this.message);
            pubsub.publish('compAEvent', this.message);
        }
    }
}