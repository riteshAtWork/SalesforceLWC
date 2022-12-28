import { publish } from 'lightning/messageService';
import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class C2pParentComponent extends LightningElement {
    isModalVisible = false;
    publishedMessage = 'check'

    connectedCallback() {
        this.subscribeMessage()
    }

    showModalHandler() {
        this.isModalVisible = true;
    }

    /**
     * this method will triggered from child component upon onclick of close button
     * which will initiate the cancelHandler() and dispatch new event "closemodal" (i.e. onclosemodal)
     */
    closeModalHandler() {
        this.isModalVisible = false
    }

    subscribeMessage() {
        // pubsub.subscribe('PublishMessagFromParentComp', (msg) => {
        //     this.publishedMessage = msg
        // })
        console.log("check c2pParentComponent");
    }

}