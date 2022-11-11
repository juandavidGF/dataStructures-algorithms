
class Node {
	constructor(value) {
		this.right = null;
		this.left = null;
		this.value = value;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		if(!this.root) {
			this.root = new Node(value);
		} else {
			let currentNode = this.root;
			const newNode = new Node(value)
			while(true) {
				if(currentNode.value < value) {
					if(!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					if(!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}
}

const tree = new BinaryTree();

tree.insert(30);
tree.insert(25);
tree.insert(20);
tree.insert(15);
tree.insert(10);
tree.insert(5);
tree.insert(0);
