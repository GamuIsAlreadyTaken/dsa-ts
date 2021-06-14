import { DataStructure } from "./dsa.js";


export class Queue<T>{
    private body: Array<T>;
    private front: number = -1;
    private rear: number = -1;

    constructor(size: number) {
        this.body = new Array<T>(size);
    }
    enqueue = (element: T) => {
        if (this.isFull()) { throw RangeError("Cannot enqueue element, queue is full") }
        if (this.front == -1) this.front = 0;
        this.rear++;
        this.body[this.rear] = element;
    }
    dequeue = (): T => {
        if (this.isEmpty()) { throw RangeError("Cannot dequeue from empty queue"); }
        let element: T = this.body[this.front];
        this.body[this.front] = null;
        if (this.front == this.rear){
            this.front = -1;
            this.rear = -1;
        } 
        this.front++;
        return element;
    }
    isEmpty = (): boolean => {
        return this.front == -1;
    }
    isFull = (): boolean => {
        return this.rear == this.body.length;
    }
    peek = (): T => {
        return this.body[this.front];
    }

}
