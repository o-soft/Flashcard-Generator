

const FlashCard = function(front, back) {
	this.front,
	this.back,
}

FlashCard.prototype.printFlashCard = function() {
	return FlashCard,
	console.log('Front of Card:' + this.front + ' | ' + this.back);
};

FlashCard.prototype.printCardFront = function() {
	return this.front,
	console.log('Front of Card:' + this.front);
};

FlashCard.prototype.printCardBack = function() {
	return this.back,
	console.log('Front of Card:' + this.back);
};

module.exports = FlashCard;