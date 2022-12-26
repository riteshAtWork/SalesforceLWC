import { LightningElement } from 'lwc';
import signupTemplate from './signupTemplate.html';
import signinTemplate from './signinTemplate.html';
import renderTemplate from './rendeMethod.html';
export default class RendeMethod extends LightningElement {
    selectedBtn = '';

    render() {
        return this.selectedBtn === 'Signup' ? signupTemplate :
            this.selectedBtn === 'Signin' ? signinTemplate :
                renderTemplate
    }
    handleClick(event) {
        this.selectedBtn = event.target.label
    }
    submitHandler(event) {
        console.log(`${event.target.label} Successfully!!`)
        alert("Sigin Successfully!!")
    }
}