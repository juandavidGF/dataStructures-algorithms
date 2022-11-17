

class Graph {
	constructor() {
		this.adjacentVertex = {};
		this.nodes = 0;
	}
	addVertex(node) {
		this.adjacentVertex[node] = [];
		this.nodes++;
	}
	addEdge(node1, node2) {
		this.adjacentVertex[node1].push(node2);
		this.adjacentVertex[node2].push(node1);
	}
}

const myGraph = new Graph();