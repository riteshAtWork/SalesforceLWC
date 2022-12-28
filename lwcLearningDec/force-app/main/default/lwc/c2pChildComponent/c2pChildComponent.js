import { LightningElement } from 'lwc';

export default class C2pChildComponent extends LightningElement {

    cancelHandler() {
        const callParent = new CustomEvent('closemodal');
        this.dispatchEvent(callParent);
    }
}