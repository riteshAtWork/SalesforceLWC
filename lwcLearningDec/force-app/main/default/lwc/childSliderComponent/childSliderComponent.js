import { LightningElement, api } from 'lwc';
// import pubsub from 'c/pubsub';

export default class ChildSliderComponent extends LightningElement {

    val = 20
    changeHandler(event) {
        this.val = event.target.value

    }
    /**
     * use {@api} to make the method or property as pub;ic so that 
     * classes/componnect outside this component can access it
     */
    @api resetSlider() {
        this.val = 50
    }

    publishHandler() {
        // pubsub.publish('PublishMessagFromParentComp', this.val)
        console.log('check publish handler');
    }
}