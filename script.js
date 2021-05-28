'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;

const changeTextContent = function (property, message) {
  document.querySelector(`${property}`).textContent = message;
};

let checkAnswer = function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    changeTextContent('.message', '⛔ Enter a Number!'); // document.querySelector('.message').textContent = '⛔ Enter a Number!'';

    // When player wins
  } else if (guess === secretNumber) {
    changeTextContent('.message', '🎉 Correct Number!');
    changeTextContent('.number', secretNumber); // document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      changeTextContent('.highscore', score); // document.querySelector('.highscore').textContent = score;
    }

    // When guess is not equal to secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      changeTextContent(
        '.message',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      changeTextContent('.score', score); // document.querySelector('.score').textContent = score;
    } else {
      score--;

      changeTextContent('.score', score); // document.querySelector('.score').textContent = score;
      changeTextContent('.message', '😈 You loose!');
    }
  }
};

document.querySelector('.check').addEventListener('click', checkAnswer);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    checkAnswer();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  changeTextContent('.message', ' Start guessing...');

  changeTextContent('.number', '?'); // document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';

  score = 20;
  changeTextContent('.score', score); // document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});
