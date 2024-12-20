/**
 * Executes through the command line
 * @param {string}  to be printed
 */
'use strict'

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome to ALX, what is your name?')

r1.on('line', (name) => {
    console.log('Your name is: ${name}');
    r1.close();
}); 

r1.on('close', () => {
    console.log("This important software is now closing")
    process.exit(0);
});
