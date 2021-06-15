import * as dsa from './dsa/dsa.js';
import * as test from './test.js';
let queue = new dsa.Queue(6);
let stack = new dsa.Stack(6);
let circular_queue = new dsa.CircularQueue(4);
test.testCircularQueue();
test.testQueue();
test.testStack();
