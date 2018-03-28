'use strict'

export default class Packet {

    constructor() {
        this.items = [];
    }

    get CAPACITY() {
        return 10;
    }

    get length() {
        return this.items.reduce((a, b) => a + b, 0);
    }

    addItem(item) {
        if (!this.canBeAdded(item)) {
            throw new Error("Oh, that is too much for me! Sorry :(");
        }
        this.items.push(item);
    }

    canBeAdded(item) {
        return (this.length + item) <= this.CAPACITY;
    }

    toString() {
        return this.items.join('');
    }
}
