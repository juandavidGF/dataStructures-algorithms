
class Node {
	constructor(value) {
		this.value = value,
		this.next = null;
		this.prev = null;
	}
}

class doublyLinkedList {
	constructor() {
		this.head = {
			value: 1,
			next: null,
			prev: null,
		}
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);

		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	insert(index, value) {
		if(index >= this.length) {
			this.append(value)
			console.log(`el index ingresado es mayor al indice maximo de la lista ${this.length - 1}, por lo que se agrego al final`)
			return this;
		}

		const newNode = new Node(value);

		const firstNode = this.getTheNode(index -1);
		const holdingNode = firstNode.next;
		firstNode.next = newNode;
		newNode.prev = firstNode;
		newNode.next = holdingNode;
		holdingNode.prev = newNode;
		this.length++;

		return this;
	}

	remove(index) {
		if(index >= this.length) {
			console.log(`el index ingresado es mayor al indice maximo de la lista ${this.length - 1}`)
			return null;
		}

		const firstNode = this.getTheNode(index - 1);
		const holdingNode = firstNode.next;
		firstNode.next = holdingNode.next;
		holdingNode.next.prev = firstNode;
		this.length--;

		return this;
	}

	getTheNode(index) {
		let count = 0;
		let currentNode = this.head;
		while(count < index) {
			currentNode = currentNode.next;
			count++;
		}

		return currentNode;
	}
}

const myDoubleLinkedList = new doublyLinkedList(1);

myDoubleLinkedList.append(2);
myDoubleLinkedList.append(3);
myDoubleLinkedList.append(4);

console.log("append ", myDoubleLinkedList);
