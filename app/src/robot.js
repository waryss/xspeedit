'use strict'

import Chain from "./chain";

export default class Robot {

    constructor() {
        this.chain = new Chain();
    }

    process(input) {
        this.chain.init(input);
        this.chain.start();
    }

}
