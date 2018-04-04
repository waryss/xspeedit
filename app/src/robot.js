'use strict'

import Chain from './chain';

export default class Robot {

    constructor() {
        this.chain = new Chain();
    }

    process(input) {
        console.log(`Items : ${input}`);
        this.chain.init(input);
        this.chain.start();
        console.log(`Optimized robot : ${this.chain.packages} => ${this.chain.packets.length} cartons utilisés`);
    }

}
