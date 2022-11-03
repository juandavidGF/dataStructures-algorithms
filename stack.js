
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);

		if(this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const holdingNode = this.top;
			this.top = newNode;
			this.top.next = holdingNode;
		}
		this.length++;

		return this;
	}

	peek() {
		return this.top;
	}

	pop() {
		const holdingNode = this.top;
		this.top = this.top.next;
		this.length--;

		return this;
	}
}

const myStack = new Stack;

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);