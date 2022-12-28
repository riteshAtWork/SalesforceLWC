import { LightningElement } from 'lwc';

export default class CopmCommByAction extends LightningElement {
    progressStatus = 5

    handleProgressData(event) {
        this.progressStatus = event.target.value;
    }

    /**
     * this is example of calling child method from parent
     * firct get the child component with w=queryselector and
     * then trigger/invoke the public method of the chiled component
     */
    handleClick() {
        this.template.querySelector('c-child-slider-component').resetSlider()
    }
}