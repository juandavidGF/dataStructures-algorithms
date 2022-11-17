
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
			const newNode = new Node(value);

			while(true) {
				if(currentNode.value > value) {
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

	searchValue(value) {
		let index = 0;
		let currentNode = this.root;
		while(true) {
			if(value === currentNode.value) {
				console.log('i', index);
				return currentNode;
			} else if(value < currentNode.value) {
				index = 2*index+1;
				if(!currentNode.left) {
					currentNode.left = new Node(value);
					return currentNode.left;
				}
				currentNode = currentNode.left;
			} else if(value > currentNode.value) {
				index = 2*index+2;
				if(!currentNode.right) {
					currentNode.right = new Node(value);
					return currentNode.right;
				}
				currentNode = currentNode.right;
			}
		}
	}

	searchR(value, tree = this.root, index = 0) {
		if(tree == null) {
			return "the value wasn't found";
		} else if (value < tree.value) {
			return this.searchR(value, tree.left, 2*index+1);
		} else if (value > tree.value) {
			return this.searchR(value, tree.right, 2*index+2);
		} else if(value == tree.value) {
			return `the value ${value}, was foundn in the index ${index}`;
		} else {
			return "an error ocurred";
		}
	}
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(4);
tree.insert(20);
tree.insert(2);
tree.insert(8);
tree.insert(17);
tree.insert(170);