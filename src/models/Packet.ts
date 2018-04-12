"use strict";

export default class Packet {

    public items: number[];
    private CAPACITY: number = 10;

    constructor() {
        this.items = [];
    }

    get length(): number {
        return this.items.reduce((a, b) => a + b, 0);
    }

    addItem(item: number): void {
        if (!this.canBeAdded(item)) {
            throw new Error("Oh, that is too much for me! Sorry :(");
        }
        this.items.push(item);
    }

    canBeAdded(item: number): boolean {
        return (this.length + item) <= this.CAPACITY;
    }

    toString(): string {
        return this.items.join("");
    }
}

