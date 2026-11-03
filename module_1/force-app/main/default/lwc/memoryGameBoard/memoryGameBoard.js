import { LightningElement } from 'lwc';

export default class MemoryGameBoard extends LightningElement {
    cards = [];

    connectedCallback() {
        this.cards = Array.from({ length: 16 }, (_, index) => ({ id: index + 1 }));
    }
}