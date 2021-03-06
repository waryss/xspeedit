"use strict"

import assert from "assert";
import Chain from "../../src/models/Chain";

describe("chain", function () {

    const INPUT: string = "163841689525773";

    it("should not start chain when It is not inizialized yet", function () {
        let chain: Chain = new Chain();

        assert.throws(() => chain.start(), Error);
        assert.equal(chain.packages, "");
    })

    it("should return optimized packed items", function () {
        let chain: Chain = new Chain();

        chain.init(INPUT);
        chain.start();

        assert.equal(chain.packages, "163/81/46/82/9/55/73/7");
    })

    it("should return optimized packed items despite of items with size of 0", function () {
        let chain: Chain = new Chain();

        chain.init("16384168905257730");
        chain.start();

        assert.equal(chain.packages, "163/81/46/82/9/55/73/7");
    })

    it("should return 8 optimized packets", function () {
        let chain: Chain = new Chain();

        chain.init(INPUT);
        chain.start();

        assert.equal(chain.packets.length, 8);
    })

    it("should return optimized packed items for small size items", function () {
        let chain: Chain = new Chain();

        chain.init("143141232525213");
        chain.start();

        assert.equal(chain.packages, "14311/4231/252/523");
    })

})
