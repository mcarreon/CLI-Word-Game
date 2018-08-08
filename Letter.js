var Letter = function (letter) {
    this.letter = letter;
    this.guessed = false;
}

Letter.prototype.toString = function () {
    if (this.guessed === true) {
        return this.letter;
    }
    else {
        return "_";
    }
}

Letter.prototype.compare = function (char1) {
    if (char1 === this.letter) {
        this.guessed = true;
    }
}


module.exports.Letter = Letter;