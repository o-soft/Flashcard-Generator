

const ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
}

ClozeCard.prototype.printClozeCard = function() {
	return ClozeCard,
	console.log('Full Text:' + this.text + ' | ' + this.cloze);
};

ClozeCard.prototype.printPartialText = function() {
	return this.text,
	console.log('Partial Text:' + this.text);
};

ClozeCard.prototype.printCloze = function() {
	return this.cloze,
	console.log('Cloze: ' + this.cloze);
};

module.exports = ClozeCard;