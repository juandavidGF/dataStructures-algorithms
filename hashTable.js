class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}
	HashMethod(key) {
		let hash = 0;
		for(let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		const address = this.HashMethod(key);
		if(!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		return this.data;
	}

	get(key) {
		let address = this.HashMethod(key);
		let currentBucket = this.data[address];
		if(currentBucket) {
			for(let i = 0; i < currentBucket.length; i++) {
				if(currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}

	delete(key) {
		let address = this.HashMethod(key);
		let currentBucket = this.data[address];
		if(currentBucket) {
			for(let i = 0; i < currentBucket.length; i++) {
				if(currentBucket[i][0] === key) {
					if(this.data[address].length === 1) {
						delete this.data[address]
						return currentBucket[i];
					}
					// delete this.data[address][i];
					this.shiftIndex(address, i, currentBucket.length)
					return currentBucket[i];
				}
			}
		}
		return undefined;
	}

	shiftIndex(address, i, lengthBucket) {
		for(let j = i; j < lengthBucket - 1; j++) {
			this.data[address][j] = this.data[address][j+1];
		}
		delete this.data[address][lengthBucket - 1];
	}

	getKeys() {
		const keys = []
		for(let i = 0; i < this.data.length; i++) {
			if(this.data[i]) {
				for(let j = 0; j < this.data[i].length; j++) {
					if(this.data[i][j]) {
						keys.push(this.data[i][j][0]);
					}
				}
			}
		}
		return keys;
	}
}

const myHashTable = new HashTable(50);