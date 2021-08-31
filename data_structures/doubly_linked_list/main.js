class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) {
            return;
        }
        const popped = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null; // remove the popped nodes lingering connections
        }
        this.length--;
        return popped;
    }

    shift() {
        if (!this.length) {
            return;
        }

        const shifted = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shifted.next;
            this.head.prev = null;
            shifted.next = null;
        }
        this.length--;
        return shifted;
    }

    unshift(val) {
        const node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let counter, current;
        if (index <= this.length / 2) {
            counter = 0;
            current = this.head;
            while (counter < index) {
                current = current.next;
                counter++;
            }
        } else {
            counter = this.length - 1;
            current = this.tail;
            while (counter > index) {
                current = current.prev;
                counter--;
            }
        }

        return current;
    }

    set(index, val) {
        const found = this.get(index);
        if (!found) {
            return false;
        }
        found.val = val;
        return true;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            this.unshift(val);
            return true;
        }

        if (index === this.length) {
            this.push(val);
            return true;
        }

        const inserted = new Node(val);
        const previous = this.get(index-1);
        const next = previous.next;

        inserted.prev = previous;
        inserted.next = next;
        next.prev = inserted;
        previous.next = inserted;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length-1) return;
        if (index === 0) return this.shift();
        if (index === this.length-1) return this.pop();
        
        const removed = this.get(index);
        const previous = removed.prev;
        const next = removed.next;
        previous.next = next;
        next.prev = previous;
        removed.next = null;
        removed.prev = null;
        this.length--;
        return removed;
    }
}