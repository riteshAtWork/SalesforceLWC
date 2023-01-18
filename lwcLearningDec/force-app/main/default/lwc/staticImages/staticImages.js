import { LightningElement } from 'lwc';
import GOLAMMBER_MIND from '@salesforce/resourceUrl/golammber_mind';
import GOL_ICON from '@salesforce/resourceUrl/gol_icon';
import CHHOTA_GOLAMMBER from '@salesforce/resourceUrl/chhota_golammber';
import ARROW_ICON from '@salesforce/resourceUrl/arrow_icon';

export default class StaticImages extends LightningElement {
    userImage = GOLAMMBER_MIND;
    gol = GOL_ICON;
    golammber = CHHOTA_GOLAMMBER;
    arrow = ARROW_ICON;
    showGolammber = false;

    btnClickHandler() {
        this.showGolammber = !this.showGolammber;
        console.log("check", this.showGolammber);

    }

}