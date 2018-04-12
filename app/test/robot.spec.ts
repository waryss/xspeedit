"use strict"

import assert from "assert";
import Robot from "../src/robot";

describe("robot", function () {

    const INPUT: string = "163841689525773";

    it("should process", function () {
        let robot: Robot = new Robot();
        robot.process(INPUT);

        assert.equal(robot.chains.length, 1);

        robot.stop();

        assert.equal(robot.chains, null);
    })

})
