export class Stack {
    constructor(size) {
        this.top = -1;
        this.push = (element) => {
            if (this.isFull())
                throw RangeError("Cannot push element to full stack");
            this.top++;
            this.body[this.top] = element;
        };
        this.pop = () => {
            let element = this.body[this.top];
            this.body[this.top] = undefined;
            this.top--;
            return element;
        };
        this.isEmpty = () => {
            return (this.top == -1);
        };
        this.isFull = () => {
            return (this.top == this.body.length - 1);
        };
        this.peek = () => {
            return this.body[this.top];
        };
        this.body = new Array(size);
    }
}
