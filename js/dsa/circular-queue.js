import { Queue } from "./queue.js";
export class CircularQueue extends Queue {
    constructor() {
        super(...arguments);
        this.enqueue = (element) => {
            if (this.isFull()) {
                throw RangeError("Cannot enqueue element, queue is full");
            }
            if (this.front == -1)
                this.front = 0;
            this.rear = (this.rear + 1) % this.body.length;
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
            this.front = (this.front + 1) % this.body.length;
            return element;
        };
        this.isFull = () => {
            return this.front == (this.rear + 1) % this.body.length;
        };
    }
}
