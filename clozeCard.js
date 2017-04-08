

const ClozeCardConst = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.saveCard = function {
		fs.appendFile("", function(error) {
			if (error) {
				console.log("ERROR");
			};
			else {
				printClozeCard();
			};
		});
	};
};

ClozeCardConst.prototype.printClozeCard = function() {
	return ClozeCardConst,
	console.log('Full Text:' + this.text + ' | ' + this.cloze);
};

// ClozeCardConst.prototype.printPartialText = function() {
// 	return this.text,
// 	console.log('Partial Text:' + this.text);
// };

// ClozeCardConst.prototype.printCloze = function() {
// 	return this.cloze,
// 	console.log('Cloze: ' + this.cloze);
// };

module.exports = ClozeCardConst;