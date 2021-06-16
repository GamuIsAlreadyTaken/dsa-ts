import { DataStructure } from "../queue/dataStructure";
export class Stack extends DataStructure {
    constructor(size) {
        super();
        this.top = -1;
        this.push = (element) => {
            if (this.isFull())
                throw RangeError("Cannot push element, stack is full");
            this.top++;
            this.body[this.top] = element;
        };
        this.pop = () => {
            let element = this.body[this.top];
            this.body[this.top] = null;
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
            var _a;
            return (_a = this.body[this.top]) !== null && _a !== void 0 ? _a : null;
        };
        this.body = new Array(size);
    }
}
