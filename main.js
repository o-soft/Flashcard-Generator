// dependency for inquirer npm package
const theCloze = require("./clozeCard.js");
const theFlashCard = require("./flashCard.js");
const inquirer = require("inquirer");
const fs = require('fs');
const input = process.argv[2];



const flashCardGenerator = function () {
     if (input === "basic") {
            inquirer.ptompt([{
                name: 'Front of card',
                message: 'Input the front of the flash card',
            },{
                name: 'Back of card',
                message: 'Input the back of the flash card',
            }]).then(function(answers){
                const flashCard =  new FlashCardConst(answers.front, answers.back);
                flashCard.save();
            });
    } else if (input === "cloze") {
            inquirer.prompt([{
                name: 'text',
                message: 'Input the entire text',
            },{
                name: 'cloze',
                messgae: 'Input the cloze statment',
            }]).then(function(answers) {
                const clozeCard = new FlashCardConst(answers.text, answers.back);
                clozeCard.save();
    
            });
    } else {
            fs.readFile("basic.txt", "utf8", function(error, data){
                if (error) {
                    console.log("ERROR");
                }
                else {
                    console.log("Flash Cards: " +  "[" + data + "]");
                }
            });
        }
    }
};



// const readMyCards = function(file) {
// 	 fs.readFile(file, "utf8", function(error, data){
// 	 	var flashCardArray = [];
// 	 	if (!error) {
// 	 		console.log(data);
// 	 		var jsonData = JSON.parse(data);
// 	 		for (var i = 0; i < jsonData.length; i++) {
// 	 			flashCardArray.push(jsonData[i]);
// 	 		}
// 	 	}
//     });
// }