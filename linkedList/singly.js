
class Node {
	constructor(value) {
		this.value = value,
		this.next = null;
	}
}

class singleLinkedList {
	constructor() {
		this.head = {
			value: 1,
			next: null,
		}
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);

		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
}

const mySingleLinkedList = new singleLinkedList();


mySingleLinkedList.append(2)
mySingleLinkedList.append(3)
