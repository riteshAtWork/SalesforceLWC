import { LightningElement, track } from 'lwc';

export default class LwcHelloWorld extends LightningElement {

    /***DATA BINDING EXAMPLE */
    fullName = "Zero to Hero";
    title = "lwc"

    changeHandler(event) {
        this.title = event.target.value
    }
    /***@track Binding example */
    @track address = {
        city: 'Hyderabad',
        postcode: 500001,
        country: 'India'
    }

    trackHandler(event) {
        this.address.city = event.target.value;
    }

    /***getter property */
    users = ["John", "David", "Charles"];
    num1 = 2;
    num2 = 3;

    get firstUser() {
        return this.users[0]
    }

    get multiply() {
        return this.num1 * this.num2
    }

}