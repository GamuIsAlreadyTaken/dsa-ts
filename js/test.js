import * as dsa from "./dsa/dsa.js";
export function testStack() {
    let stack = new dsa.Stack(4);
    console.log("Probando el stack");
    console.log(stack, "Añadiendo 4 datos");
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    console.log(stack, "Quitando 2 datos");
    stack.pop();
    stack.pop();
    console.log(stack, "Añadiendo 2 datos");
    stack.push(5);
    stack.push(6);
    console.log(stack, "Quitando 4 datos");
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
}
export function testQueue() {
    let queue = new dsa.Queue(4);
    console.log("Probando el queue");
    console.log(queue, "Añadiendo 4 datos");
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    console.log(queue, "Quitando 2 datos");
    queue.dequeue();
    queue.dequeue();
    console.log(queue, "Probando añadir datos estando llena");
    try {
        queue.enqueue(5);
    }
    catch (error) {
        console.log("Todo va bien");
    }
    console.log(queue, "Quitando 2 datos");
    queue.dequeue();
    queue.dequeue();
    console.log(queue, "Probando a quitar estando vacia");
    try {
        queue.dequeue();
    }
    catch (error) {
        console.log("Todo va bien");
    }
    console.log(queue, "Test acabado");
}
export function testCircularQueue() {
    let cqueue = new dsa.CircularQueue(4);
    console.log("Probando el circularQueue");
    console.log(cqueue, "Añadiendo 4 datos");
    cqueue.enqueue(1);
    cqueue.enqueue(2);
    cqueue.enqueue(3);
    cqueue.enqueue(4);
    console.log(cqueue, "Quitando 2 datos");
    cqueue.dequeue();
    cqueue.dequeue();
    console.log(cqueue, "Añadiendo 2 datos");
    cqueue.enqueue(5);
    cqueue.enqueue(6);
    console.log(cqueue, "Probando añadir estando llena");
    try {
        cqueue.enqueue(7);
    }
    catch (error) {
        console.log("Todo va bien");
    }
    console.log(cqueue, "Quitando 4 datos");
    cqueue.dequeue();
    cqueue.dequeue();
    cqueue.dequeue();
    cqueue.dequeue();
    console.log(cqueue, "Probando quitar estando vacia");
    try {
        cqueue.dequeue();
    }
    catch (error) {
        console.log("Todo va bien");
    }
    console.log(cqueue, "Test acabado");
}
