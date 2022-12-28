import { LightningElement } from 'lwc';

/**import the MessageContext and publish from messageService in order to use the LMS*/
import { MessageContext, publish } from 'lightning/messageService';

/**ipoer MessageChannel that we have created for LMS service in messageChannel folder
 * you can give any name you like for standarisation, name will start with Capital letter
 * we are using the "MyLightningMsgService"
 * in import from "@salesforce/messageChannel/masterLabelName__c", hence the masterLabelName should be from messageChannel-meta.xml <masterLabel> tag
*/
import MyLightningMsgService from "@salesforce/messageChannel/SampleMessageChannel__c"
/**
 * import the 'Wire' service as the MessageContext Wire adapter use to get information of all LWC using LMS
 */
import { wire } from "lwc";

export default class LmsPublisherComponent extends LightningElement {

    //to store teh input text from Input tag
    userMessage
    //context will hold the reference to 'MessageContext'
    @wire(MessageContext) context

    //implementing teh method for onkeyup
    textChangeHandler(event) {
        this.userMessage = event.target.value
    }

    //implement the LMS Publish mehtos on Button press
    publishMessage(event) {
        console.log('this is from ::::', this.userMessage);
        //constant to set the data to the name declared in messageChannel-meta.xml <fieldName> tag
        const message = {
            myLMSData: this.userMessage
        };

        /**
         * publish the message  'publish(MessageContext, MessageChannel, data)' LSM messageService API method
        */
        publish(this.context, MyLightningMsgService, message);
    }

}