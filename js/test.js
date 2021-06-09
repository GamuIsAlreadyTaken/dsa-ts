import * as dsa from "./dsa.js";
console.log("Lets test the implemented data structures");
console.log("The stack : ");
let a = new dsa.Stack(2);
console.log(a, '\n', a.push(2), a, a.pop(), a, a.push(5), a);
