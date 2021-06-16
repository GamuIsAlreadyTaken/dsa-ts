import { DataStructure } from "../dataStructure.js";


export class Queue<T> extends DataStructure{
    protected body: Array<T>;
    protected front: number = -1;
    protected rear: number = -1;

    constructor(size: number) {
        super();
        this.body = new Array<T>(size);
    }
    enqueue = (element: T) => {
        if (this.isFull()) { throw RangeError("Cannot enqueue element, queue is full"); }
        if (this.front == -1) this.front = 0;
        this.rear++;
        this.body[this.rear] = element;
    }
    dequeue = (): T => {
        if (this.isEmpty()) { throw RangeError("Cannot dequeue from empty queue"); }
        let element: T = this.body[this.front];
        this.body[this.front] = null;
        if (this.front == this.rear){
            this.front = -2;
            this.rear = -1;
        } 
        this.front++;
        return element;
    }
    isEmpty = (): boolean => {
        return this.front == -1;
    }
    isFull = (): boolean => {
        return this.rear == this.body.length-1;
    }
    peek = (): T => {
        return this.body[this.front];
    }

}
