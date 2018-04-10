'use strict'

import Chain from "./chain";

export default class Robot {

    public chains: Chain[];

    constructor() {
        this.chains = [];
    }

    process(input: string): void {
        let chain = new Chain();
        this.chains.push(chain);
        chain.init(input);
        chain.start();
        console.log(`Optimized robot : ${chain.packages} => ${chain.packets.length} used packets`);
    }

    stop(): void {
        this.chains = null;
    }

}
