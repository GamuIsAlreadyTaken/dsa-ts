export class Queue {
    constructor(size) {
        this.front = -1;
        this.rear = -1;
        this.enqueue = (element) => {
            if (this.isFull)
                throw RangeError("Cannot enqueue element, queue is full");
            if (this.front == -1)
                this.front = 0;
            this.rear++;
            this.body[this.rear] = element;
        };
        this.dequeue = () => {
            if (this.isEmpty)
                throw RangeError("Cannot dequeue from empty queue");
            let element = this.body[this.front];
            this.front++;
            if (this.front == this.rear)
                this.front = this.rear = -1;
            return element;
        };
        this.isEmpty = () => {
            return;
        };
        this.isFull = () => {
            return;
        };
        this.peek = () => {
            return;
        };
        this.body = new Array(size);
    }
}
