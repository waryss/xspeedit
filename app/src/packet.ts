'use strict'

export default class Packet {

    items: number[];

    constructor() {
        this.items = [];
    }

    get CAPACITY(): number {
        return 10;
    }

    get length(): number {
        return this.items.reduce((a: number, b: number) => a + b, 0);
    }

    addItem(item: number): void {
        if (!this.canBeAdded(item)) {
            throw new Error('Oh, that is too much for me! Sorry :(');
        }
        this.items.push(item);
    }

    canBeAdded(item: number): boolean {
        return (this.length + item) <= this.CAPACITY;
    }

    toString(): string {
        return this.items.join('');
    }
}
