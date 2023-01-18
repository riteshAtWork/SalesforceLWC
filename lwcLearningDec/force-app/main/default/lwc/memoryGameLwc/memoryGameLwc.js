import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import FontAwesome from "@salesforce/resourceUrl/fontawesome";

export default class MemoryGameLwc extends LightningElement {
    isLibLoaded = false;
    openCards = [];
    moves = 0;
    totalTime = '00:00';
    matchCard = [];
    timeRef;
    cards = [
        { id: 1, listClass: "card", type: 'diamond', icon: 'fa fa-diamond' },
        { id: 2, listClass: "card", type: 'plane', icon: 'fa fa-paper-plane-o' },
        { id: 3, listClass: "card", type: 'anchor', icon: 'fa fa-anchor' },
        { id: 4, listClass: "card", type: 'bolt', icon: 'fa fa-bolt' },
        { id: 5, listClass: "card", type: 'cube', icon: 'fa fa-cube' },
        { id: 6, listClass: "card", type: 'anchor', icon: 'fa fa-anchor' },
        { id: 7, listClass: "card", type: 'leaf', icon: 'fa fa-leaf' },
        { id: 8, listClass: "card", type: 'bicycle', icon: 'fa fa-bicycle' },
        { id: 9, listClass: "card", type: 'diamond', icon: 'fa fa-diamond' },
        { id: 10, listClass: "card", type: 'bomb', icon: 'fa fa-bomb' },
        { id: 11, listClass: "card", type: 'leaf', icon: 'fa fa-leaf' },
        { id: 12, listClass: "card", type: 'bomb', icon: 'fa fa-bomb' },
        { id: 13, listClass: "card", type: 'bolt', icon: 'fa fa-bolt' },
        { id: 14, listClass: "card", type: 'bicycle', icon: 'fa fa-bicycle' },
        { id: 15, listClass: "card", type: 'plane', icon: 'fa fa-paper-plane-o' },
        { id: 16, listClass: "card", type: 'cube', icon: 'fa fa-cube' },
    ];

    renderedCallback() {
        if (this.isLibLoaded) {
            return
        }
        else {
            loadStyle(this, FontAwesome + '/fontawesome/css/font-awesome.min.css').then(
                () => { console.log("font awsome loaded successfully"); }
            ).catch(
                (error) => {
                    console.error(error);
                    alert("error in loading the fontAwsome file");
                }
            );
        }
        this.isLibLoaded = true;
    }

    displayCard(event) {
        let currCard = event.target;
        currCard.classList.add("open", "show", "disabled");
        this.openCards = this.openCards.concat(event.target);
        const len = this.openCards.length;
        if (len === 2) {
            this.moves = this.moves + 1;
            if (this.moves === 1) {
                this.timer();
            }
            if (this.openCards[0].type === this.openCards[1].type) {
                this.matchCard = this.matchCard.concat(this.openCards[0], this.openCards[1]);
                this.matched();
            }
            else { this.unmatched() }
        }
    }

    matched() {
        this.openCards[0].classList.add("match", "disabled");
        this.openCards[1].classList.add("match", "disabled");
        this.openCards[0].classList.remove("show", "open");
        this.openCards[1].classList.remove("show", "open");
        this.openCards = [];
        if (this.matchCard.length === 16) {
            window.clearInterval(this.timeRef);
        }
    }

    unmatched() {
        this.openCards[0].classList.add("unmatched");
        this.openCards[1].classList.add("unmatched");
        this.action('DISABLE');

        setTimeout(() => {
            this.openCards[0].classList.remove("show", "open", "unmatched");
            this.openCards[1].classList.remove("show", "open", "unmatched");
            this.action('ENABLE');
            this.openCards = [];
        }, 1100);
    }

    action(action) {
        let cards = this.template.querySelectorAll('.card');
        Array.from(cards).forEach(item => {
            if (action === 'ENABLE') {
                let isMatch = item.classList.contains('match');
                if (!isMatch) {
                    item.classList.remove('disabled');
                }
            }
            if (action === 'DISABLE') {
                item.classList.add('disabled');
            }
        });
    }

    timer() {
        let startTime = new Date();
        this.timeRef = setInterval(() => {
            let diff = new Date().getTime() - startTime.getTime();
            let d = Math.floor(diff / 1000)
            const m = Math.floor(d % 3600 / 60);
            const s = Math.floor(d % 3600 % 60);
            const mDisplay = (m > 0) ? m + (m === 1 ? " minutes, " : " minutes, ") : "";
            const sDisplay = (s > 0) ? s + (s === 1 ? " second" : " seconds") : "";
            this.totalTime = mDisplay + sDisplay;
        }, 1000);
    }
    shuffle() {
        this.openedCards = [];
        this.matchedCard = [];
        this.totalTime = '00:00';
        this.moves = 0;
        window.clearInterval(this.timeRef);
        let elem = this.template.querySelectorAll('.card');
        Array.from(elem).forEach(item => {
            item.classList.remove("show", "open", "match", "disabled")
        });
        /***shuffling and swaping logic */
        let array = [...this.cards]
        let counter = array.length
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter)
            counter--

            let temp = array[counter]
            array[counter] = array[index]
            array[index] = temp
        }
        this.cards = [...array]
    }
}