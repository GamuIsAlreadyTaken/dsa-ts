import { DataStructure } from "./dataStructure";
export class Queue extends DataStructure {
    constructor(size) {
        super();
        this.front = -1;
        this.rear = -1;
        this.enqueue = (element) => {
            if (this.isFull()) {
                throw RangeError("Cannot enqueue element, queue is full");
            }
            if (this.front == -1)
                this.front = 0;
            this.rear++;
            this.body[this.rear] = element;
        };
        this.dequeue = () => {
            if (this.isEmpty()) {
                throw RangeError("Cannot dequeue from empty queue");
            }
            let element = this.body[this.front];
            this.body[this.front] = null;
            if (this.front == this.rear) {
                this.front = -2;
                this.rear = -1;
            }
            this.front++;
            return element;
        };
        this.isEmpty = () => {
            return this.front == -1;
        };
        this.isFull = () => {
            return this.rear == this.body.length - 1;
        };
        this.peek = () => {
            return this.body[this.front];
        };
        this.body = new Array(size);
    }
}
