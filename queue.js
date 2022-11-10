
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.last = null;
		this.first = null;
		this.length = 0;
	}

	enqueue(value) {
		const newNode = new Node(value);

		if(this.length === 0) {
			this.last = newNode;
			this.first = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;

		return this;
	}

	peek() {
		return this.first;
	}

	dequeue() {
		this.first = this.first.next;
		this.length--;

		return this;
	}
}

const myQueue = new Queue;

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
