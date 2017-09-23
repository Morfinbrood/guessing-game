class GuessingGame {

    constructor() {
        this.minimal = 0;
        this.maximum = 0;
        this.mid = 0;
    }

    setRange(min, max) {
        this.minimal = min;
        this.maximum = max;
    }

    //Note  math.ceil(4)=4   math.ceil(4.01)=5
    guess() {
        this.mid = Math.ceil((this.minimal + this.maximum) / 2);
        return this.mid;
	}
	
	// ATTENTION!!! in spec says :
		//  lower() "this method is called if prev call of guess() returned number which is lower than answer"
		// greater() "this method is called if prev call of guess() returned number which is lower than answer"
	// But it conflicts with these tests. And i implemented task with revert logic (lower() and greater()) who works with these tests.

	// IMPORTANT! this method is called if prev call of guess() returned number which is greater than answer
    lower() {
        this.maximum = this.mid;
	}
	
	// IMPORTANT! this method is called if prev call of guess() returned number which is lesser than answer
    greater() {
        this.minimal = this.mid;
    }
}

module.exports = GuessingGame;