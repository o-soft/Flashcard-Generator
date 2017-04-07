// dependency for inquirer npm package
const theCloze = require("./clozeCard.js");
const theFlashCard = require("./flashCard.js");
const inquirer = require("inquirer");
const fs = require(fs);





// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.showCard = function() {
  console.log("Front " + this.front+ "\nBack: " + this.back;
  console.log("---------------");
};

const flashcardGenerator = function() {

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
    		displayCards(basic.txt);
    		configureCards();
    	}

    	else if (option.card === 'cloze-cards') {
    		displayCards(cloze.txt);
    		configureCards();
    	}



    });