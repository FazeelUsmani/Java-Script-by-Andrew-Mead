const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
}

Hangman.prototype.calculateStatus = function () {

    // Approach 3
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter));

    // Approach 2
    // const lettersUnguessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter);
    // })
    // const finished = lettersUnguessed.length === 0;

    // Approach - 1
    // let finished = true;
    // this.word.forEach((letter) => {
    //     if (this.guessedLetters.includes(letter)) {
    //     } else {
    //         finished = false;
    //     }
    // })
    if (this.remainingGuesses <= 0) {
        this.status = 'failed';
    } else if (finished) {
        this.status = 'finished';
    } else {
        this.status = 'playing';
    }
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';
    let i = 0;
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle = puzzle + letter;
        }
        else {
            puzzle = puzzle + '*';
        }
    })

    return puzzle;
}

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === 'failed') {
        return `Nice try! The word was "${this.word.join('')}".`;
    } else {
        return 'Great work! You guessed the work.'
    }

}


Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (this.status !== 'playing') {
        return;
    }

    if (isUnique) {
        this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess) {
        this.remainingGuesses--;
    }

    this.calculateStatus();
}

