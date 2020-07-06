import Person from './Person.js';

let john = new Person('John');

console.log('Hello ' + john.name);
console.log('Trying to talk to John');
console.log(`${john.name} replies : ${john.talkTo()}`);
