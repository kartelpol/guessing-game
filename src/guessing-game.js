class GuessingGame {
    constructor() {
		this.root = null;
		this.max = null;
		this.min = null;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    	this.root = Math.round((this.max + this.min)/2);
    	return this.min;
    	return this.max;
    }

    guess() {
    	this.root = Math.round((this.max + this.min)/2);
    	return this.root;
    }

    lower() {
    	this.max = this.root;
    	return this.max;
    }

    greater() {
		this.min = this.root;
		return this.min;
    }
}

module.exports = GuessingGame;
