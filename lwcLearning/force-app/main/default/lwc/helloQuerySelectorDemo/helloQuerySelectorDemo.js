import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

    userNames = ["Jon", "Robb", "Bran", "Rickon"]

    fetchDetailHandler() {
        const elem = this.template.querySelector('h1');
        elem.style.border = "2px solid cyan";
        console.log(elem.innerText);

        const userElements = this.template.querySelectorAll('.name');
        Array.from(userElements).forEach(item => {
            console.log(item.innerText);
            item.setAttribute("title", item.innerText);
        });
    }

}