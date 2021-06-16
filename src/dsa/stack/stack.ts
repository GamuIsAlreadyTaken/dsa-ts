import { DataStructure } from "../dataStructure.js";

export class Stack<T> extends DataStructure{
    private body: Array<T>;
    private top: number = -1;

    constructor(size: number) {
        super();
        this.body = new Array<T>(size);
    }
    push = (element: T) => {
        if (this.isFull()) throw RangeError("Cannot push element, stack is full");

        this.top++;
        this.body[this.top] = element;
    }
    pop = (): T => {
        let element: T = this.body[this.top];
        this.body[this.top] = null;
        this.top--;
        return element;
    }
    isEmpty = (): boolean => {
        return (this.top == -1);
    }
    isFull = (): boolean => {
        return (this.top == this.body.length - 1);
    }
    peek = (): T => {
        return this.body[this.top] ?? null;
    }
}
