import * as dsa from "./dsa.js";
console.log("Lets test the implemented data structures");
console.log("The stack : ");
let stack = new dsa.Stack(2);
let getMethods = (obj) => Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function');
console.log(getMethods(stack));
for (const a of getMethods(stack)) {
    console.log(a, stack[a](3), stack);
}
