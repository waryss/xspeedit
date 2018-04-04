'use strict'

import Packet from './packet';

export default class Chain {

    constructor() {
        this.items = [];
    }

    get packages() {
        return this.packets.join('/');
    }

    init(input) {
        this.items = Array.from(input, c => parseInt(c)).filter(x => x > 0);
        this.packets = [];
    }

    start() {
        if (!this.items.length) {
            throw new Error('Chain not initialized');
        }
        let currentPacket = new Packet();
        this.packets.push(currentPacket);
        while (this.items.length) {
            let found = this.items.find(e => {
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
