class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        if (!this.items.includes(item)) {
            this.items.push(item);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    clear() {
        return this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
export default Queue;