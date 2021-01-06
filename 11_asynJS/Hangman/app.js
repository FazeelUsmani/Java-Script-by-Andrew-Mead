const puzzleEle = document.querySelector('#puzzle');
const guessesEle = document.querySelector('#guesses');
const statusEle = document.querySelector('#status');
const game1 = new Hangman('Cat', 2);

puzzleEle.textContent = game1.getPuzzle();
guessesEle.textContent = game1.getStatusMessage();
statusEle.textContent = game1.status;

window.addEventListener('keypress', function (e) {
    // if (game1.remainingGuesses == 0) {
    //     console.log("Game Over");
    //     return;
    // }
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEle.textContent = game1.getPuzzle();
    guessesEle.textContent = game1.getStatusMessage();
    status.textContent = game1.status;
})


// Making an HTTP request
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4) {
        const data = JSON.parse(e.target.responseText);
        console.log(data);
    }
})
request.open('GET', 'http://puzzle.mead.io/puzzle');
request.send();

