'use strict'

import Chain from "./chain";

export default class Robot {

    constructor() {
        this.chains = [];
    }

    process(input) {
        let chain = new Chain();
        this.chains.push(chain);
        chain.init(input);
        chain.start();
        console.log(`Optimized robot : ${chain.packages} => ${chain.packets.length} used packets`);
    }

    stop() {
        this.chains = [];
    }

}
