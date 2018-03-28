'use strict'

import assert from "assert";
import Packet from "../src/packet";

describe('packet', function () {

    it('should return true when an item can be added (packet + item length is less than capacity)', function () {
        let packet = new Packet();

        packet.addItem(8);

        assert.ok(packet.canBeAdded(2));

    })

    it('should return false when an item can not be added (packet + item length is higher than capacity)', function () {
        let packet = new Packet();

        packet.addItem(7);
        packet.addItem(2);

        assert.ok(!packet.canBeAdded(5));
    })

    it('should add item on packet', function () {
        const itemSize = 8;
        let packet = new Packet();

        packet.addItem(itemSize);

        assert.equal(packet.items.length, 1);
        assert.equal(packet.items[0], itemSize);

    })

    it('should not add item on packet', function () {
        let packet = new Packet();

        packet.addItem(7);
        packet.addItem(2);

        assert.throws(() => packet.addItem(5), Error);
        assert.equal(packet.items.length, 2);
        assert.equal(packet.items[1], 2);
    })

})
