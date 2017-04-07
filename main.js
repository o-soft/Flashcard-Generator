// dependency for inquirer npm package
const theCloze = require("./clozeCard.js");
const theFlashCard = require("./flashCard.js");
const inquirer = require("inquirer");
const fs = require('fs');



const flashCardGenerator = function() {

    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
     	{
		  name: 'typeOfCard',
		  message: 'Woud you like to create a Basic Card or Cloze Card?',
		  option: ['basic-cards', 'cloze-cards']
	 	},
	
    ]).then(function(option) {
   		
    	if (option.card === 'basic-cards') {
    		readMyCards(basic.txt);
    		configureCards();
    	}

    	else if (option.card === 'cloze-cards') {
    		readMyCards(cloze.txt);
    		configureCards();
    	}

    	// else if (option.card != ('basic-cards' || 'cloze-cards') {
    	// 	console.log('Error, please select a different card option.')
    	// }


    });
}

const readMyCards = function(file) {
	 fs.readFile(file, "utf8", function(error, data){
	 	var flashCardArray = [];
	 	if (!error) {
	 		console.log(data);
	 		var jsonData = JSON.parse(data);
	 		for (var i = 0; i < jsonData.length; i++) {
	 			flashCardArray.push(jsonData[i]);
	 		}
	 	}
    })
}