import { LightningElement, api } from 'lwc';

export default class ChildComponentAction extends LightningElement {
    @api message
    @api progressPercentage
}