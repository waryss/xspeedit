'use strict'

import readline, {ReadLine} from "readline";
import Robot from "./Robot";

const robot: Robot = new Robot();

const prompt: ReadLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

prompt.setPrompt('Enter items to package >');

prompt.prompt();

prompt.on('line', (line: string) => {
    if (line.match(/^[-+]?[1-9]\d*$/)) {
        console.log(`Items : ${line}`);
        robot.process(line);
    } else {
        if ('help' == line) {
            console.log(' ***** Enter a chain of items and I will maximize their packaging on packet ***** ');
            console.log(' ******************   Use exit to ... exit the program ************************** ');
        } else if ('exit' == line) {
            console.log(`${robot.chains.length} chains have been processed by the robot`);
            robot.stop();
            prompt.close();
        } else {
            console.log(' ******************** Items must be only a chain of numbers ********************* ');
        }
    }
    prompt.prompt();
}).on('close', () => {
    console.log('HAVE A GREAT DAY!');
    process.exit(0);
});