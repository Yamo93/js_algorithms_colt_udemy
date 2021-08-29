class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return;
        }

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) {
            return;
        }

        let current = this.head;
        this.head = current.next;
        this.length--;
        if (!this.length) {
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
        if (!this.length) {
            this.tail = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index === 0) {
            return this.head;
        }
        let counter = 0;
        let current = this.head;
        while (counter < index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        const foundNode = this.get(index);
        if (!foundNode) {
            return false;
        }
        foundNode.val = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            this.unshift(value);
            this.length++;
            return true;
        }
        if (index === this.length) {
            this.push(value);
            this.length++;
            return true;
        }
        const node = new Node(value);
        const previous = this.get(index-1);
        const current = this.get(index);
        node.next = current;
        previous.next = node;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return;
        }

        if (index === this.length-1) {
            return this.pop();
        }

        if (index === 0) {
            return this.shift();
        }

        const previous = this.get(index-1);
        const removed = previous.next;
        previous.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        let current = this.head;
        let next;
        let previous = null;
        this.head = this.tail;
        this.tail = current;

        let counter = 0;
        while (counter < this.length) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
            counter++;
        }
        return this;
    }

    print() {
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.val);
            current = current.next;
        }
        console.log(values);
    }
}

const list = new SinglyLinkedList();

