class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const node = new Node(value);
        node.next = this.first;
        this.first = node;
        if (!this.size) {
            this.last = node;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) {
            return;
        }
        const oldHead = this.first;
        if (this.size === 1) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;
        return oldHead.value;
    }
}