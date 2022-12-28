import { MessageContext, subscribe, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService';
import { LightningElement, api, wire } from 'lwc';
import MyLightningMsgService from "@salesforce/messageChannel/SampleMessageChannel__c";
// import { subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService';

export default class LmsSubscriberComponent extends LightningElement {

    // property to store teh recieved meesage from publisher
    recievedMessage
    //to store the subscripton of the LMS, required when we need to unsbuscribe
    subscription

    //to keep a refernce/context of the MessageContext
    @wire(MessageContext) context

    /**  
     * use connectedCallback lifecycle hook to triger the subscription method 
     * that will recieve the message from LMS
     * */
    connectedCallback() {
        this.subscribeMessage()
    }

    /**
     * we cannot call the LMS api methods like publish, subscribe and unsubscribe directly
     * hence need to invoke a method and call the LMS api methos from there
     * so 'subscribe(MessageContext, MessageChannel, callback)
     */
    subscribeMessage() {
        this.subscription = subscribe(this.context, MyLightningMsgService,
            (message) => {
                // this.handleMessage(message)
                console.log('the recieved message is ', message.myLMSData);
                this.recievedMessage = message.myLMSData ? message.myLMSData : 'NO Message published';
            },
            { scope: APPLICATION_SCOPE });

    }


    handleMessage(message) {
        this.recievedMessage = message.myLMSData ? message.myLMSData : 'NO Message published';
    }

    //to unsubscribe and do not recieve the LMS any further
    unsubscribeMessage() {
        unsubscribe(this.subscription)
        this.subscription = null
    }
}
