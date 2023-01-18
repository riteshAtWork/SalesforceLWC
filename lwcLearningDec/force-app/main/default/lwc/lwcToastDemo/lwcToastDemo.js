import { LightningElement } from 'lwc';
//import the showToastEvent from lightning library.
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { showSuccessToast } from 'lightning/platformShowToastEvent';
export default class LwcToastDemo extends LightningElement {
    /**
     * Tost Notification LWC.
     */
    toastSuccess() {
        //create a TOAST event
        /**
         * functionName()
         */
        const event = new ShowToastEvent({
            title: "Success !!",
            message: "Hurrah!! JUueee ka Chhota boyfriend Mil gaya. 😤 👿",
            variant: "success",
            mode: "sticky"
        });
        //dispatch the toast event
        this.dispatchEvent(event);
    }

    //Aother way to creaet a reuasble toast function
    showToastNotification(title, message, variant, mode = "dismissible") {
        const event = new ShowToastEvent({
            title,
            message,
            variant,
            mode,
            messageData: [
                'Salesforce',
                { url: 'https://developer.salesforce.com/docs/component-library/bundle/', label: 'Click Here' },
                'Golammber is calling Mumma'
            ]
        });
        this.dispatchEvent(event);
    }

    errorToastHandler() {
        this.showToastNotification("Error!!", "There is an error in the Salesforce page", "error");
    }

    infoToastHandler() {
        this.showToastNotification("Info!!", "{0} library can be fathed from {1}", "info", "sticky");
    }

    warningToastHandler() {
        this.showToastNotification("Warning!!", "{2}", "warning", "pester");
    }
}