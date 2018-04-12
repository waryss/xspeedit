"use strict";

import Packet from "./packet";

export default class Chain {

    public packets: Packet[];
    public items: number[];

    constructor() {
        this.items = [];
        this.packets = [];
    }

    get packages(): string {
        return this.packets.join("/");
    }

    init(input: string): void {
        this.items = Array.from(input, (c: string) => parseInt(c)).filter((x: number) => x > 0);
    }

    start(): void {
        if (!this.items.length) {
            throw new Error("Chain not initialized");
        }
        let currentPacket: Packet = new Packet();
        this.packets.push(currentPacket);
        let found: number;
        while (this.items.length) {
            found = this.items.find(e => {
                return currentPacket.canBeAdded(e);
            });
            if (found) {
                currentPacket.addItem(found);
                this.items.splice(this.items.indexOf(found), 1);
            } else {
                currentPacket = new Packet();
                this.packets.push(currentPacket);
            }
        }
    }
}
