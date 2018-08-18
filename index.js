var Word = require('./Word.js');
var inquirer = require('inquirer');
var randomWord = require('random-word');

//var wordToGuess = new Word.Word('test');

var wordToGuess;
var score = 0;
var chances;
var letters = [];
var guesses = [];

function isFinished() {
    var letters = wordToGuess.wordArr
    var guessed = true;
    letters.forEach(function (e) {
        if (e.guessed === false) {
            guessed = false;
        }
    });
    return guessed;
}

function pickWord() {
    guesses = [];
    var random = randomWord();
    wordToGuess = new Word.Word(random);
    letters = wordToGuess.wordArr;
    chances = 10;
}

function checkWord(letter) {
    var correctGuess = false;

    letters.forEach(function (e) {
        if (e.letter == letter && e.guessed === true) {
            correctGuess = true;
        }
    });

    return correctGuess;
}

function hasBeenGuessed(letter) {
    var guessed = false;
    guesses.forEach(function (e) {
        if (e === letter) {
            guessed = true;
        }
    });
    return guessed;
}

function gameLoss() {
    console.log('Game Over.');
    console.log(`The word was "${wordToGuess.word}"`);
    console.log(`Your score: ${score}`);
}

function begin() {
    inquirer
        .prompt({
            name: 'input',
            message: 'Guess a letter!',
            type: 'input',
            required: true,
        })
        .then(function (res) {
            //wordToGuess.guess(res.input);


            if (hasBeenGuessed(res.input) || res.input.length > 1 || !isNaN(res.input)) {
                console.log('Letter has already been guessed or incorrect input. Please pick another letter');
                wordToGuess.showWord();
                begin();
            } 
            else {
                guesses.push(res.input);

                wordToGuess.guess(res.input);

                if (checkWord(res.input)) {
                    console.log('Correct!');
                } else {
                    chances--;
                    console.log('Incorrect.');
                    console.log(`Chances left: ${chances}`);
                }

                if (chances <= 0) {
                    gameLoss();
                    pickWord();
                }

                wordToGuess.showWord();

                if (isFinished()) {
                    console.log('You Won!');

                    pickWord();
                    score++;

                    console.log('Here comes another word!');
                }

                begin();

            }
        });
}

pickWord();
begin();

//console.log(wordToGuess.wordArr);