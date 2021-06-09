export class Stack {
    constructor(size) {
        this.top = -1;
        this.body = new Array(size);
    }
    push(element) {
        if (this.isFull())
            throw RangeError("Cannot push element to full stack");
        this.top++;
        this.body[this.top] = element;
    }
    pop() {
        let element = this.body[this.top];
        this.body[this.top] = undefined;
        this.top--;
        return element;
    }
    isEmpty() {
        return (this.top == -1);
    }
    isFull() {
        return (this.top == this.body.length - 1);
    }
    peek() {
        return this.body[this.top];
    }
}
