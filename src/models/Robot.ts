"use strict";

import Chain from "./Chain";

export default class Robot {

    public chains: Chain[];

    constructor() {
        this.chains = [];
    }

    process(input: string): void {
        const chain: Chain = new Chain();
        this.chains.push(chain);
        chain.init(input);
        chain.start();
    }

    stop(): void {
        this.chains = null;
    }

}
