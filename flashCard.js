

const FlashCardConst = function(front, back) {
	this.front = front;
	this.back = back;
	this.saveCard = function {
		fs.appendFile("flashCards.txt", "{Front of Card:' + this.front + ' | ' + this.back'},", function(err){
			if (err) {
				console.log("ERROR");
			};
			else {
				printFlashCard();
			};
		});
	};
};

FlashCardConst.prototype.printFlashCard = function() {
	return FlashCardConst,
	console.log('Front of Card:' + this.front + ' | ' + this.back);
};

// FlashCardConst.prototype.printCardFront = function() {
// 	return this.front,
// 	console.log('Front of Card:' + this.front);
// };

// FlashCardConst.prototype.printCardBack = function() {
// 	return this.back,
// 	console.log('Front of Card:' + this.back);
// };

module.exports = FlashCardConst;