var Word = require('./Word.js');
var inquirer = require('inquirer');
var randomWord = require('random-word');

var wordToGuess = randomWord();

inquirer
    .prompt([{
        name: guess,
        message: 'Guess a letter!',
        type: input , 
        validate() {
            return new Promise();
        },  
    }])
    .then(function () {

    });
