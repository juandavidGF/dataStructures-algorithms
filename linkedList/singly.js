
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
		newNode.next = holdingNode;
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

const mySingleLinkedList = new singleLinkedList();


mySingleLinkedList.append(2)
mySingleLinkedList.append(3)
mySingleLinkedList.append(4)

console.log("append ", mySingleLinkedList)

const result = mySingleLinkedList.insert(3, 5);

console.log("insert ", mySingleLinkedList)

if(mySingleLinkedList.getTheNode(3).value === 5) {
	console.log("Success. El valor en el index 3 es igual a 5");
} else {
	console.log("error", mySingleLinkedList.getTheNode(3))
}