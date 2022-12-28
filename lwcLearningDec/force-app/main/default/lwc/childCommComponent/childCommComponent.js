import { LightningElement, api } from 'lwc';

export default class ChildCommComponent extends LightningElement {

    @api message;
    @api footerNote;


}