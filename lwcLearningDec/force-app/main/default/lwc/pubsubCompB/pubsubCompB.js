import { LightningElement } from 'lwc';
import { publish } from 'lightning/messageService';
import pubsub from 'c/pubsub';

export default class PubsubCompB extends LightningElement {
    message
    connectedCallback() {
        this.callSubscriber()
    }

    callSubscriber() {
        console.log("Pubsub comp B");
        // pubsub.subscribe('compAEvent', (message) => {
        //     this.message = message;
        // })
    }
}