var Chars = require('./Letter.js');

var Word = function (word) {
    this.word = word.split(""); 
    this.wordArr = []; 
    this.splitLetters();
}

Word.prototype.splitLetters = function () {
    var wordArr = this.wordArr;

    this.word.forEach(function (e) {
        var letter = new Chars.Letter(e);
        wordArr.push(letter);
    });
}

Word.prototype.showWord = function () {
    var returnWord = '';

    this.wordArr.forEach(function (e) {
        returnWord += e + ' ';
    });
    console.log(this.wordArr);
    console.log(returnWord);
}

Word.prototype.guess = function (char) {
    this.wordArr.forEach(function (e) {
        e.compare(char);
    }); 
}

module.exports.Word = Word;