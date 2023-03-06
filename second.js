const highScoresTable = document.querySelector('table tbody');
const clearButton = document.getElementById('clear-button');
const goBackButton = document.getElementById('go-back-button');

// Load high scores from local storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Sort high scores in descending order
highScores.sort((a, b) => b.score - a.score);

// Display high scores in table
highScores.forEach((score, index) => {
  if (index < 10) {
    const row = document.createElement('tr');
    const rank = document.createElement('td');
    rank.textContent = index + 1;
    const initials = document.createElement('td');
    initials.textContent = score.initials;
    const scoreCell = document.createElement('td');
    scoreCell.textContent = score.score;
    row.appendChild(rank);
    row.appendChild(initials);
    row.appendChild(scoreCell);
    highScoresTable.appendChild(row);
  }
});

// Clear high scores from local storage
function clearHighScores() {
  localStorage.removeItem('highScores');
  highScoresTable.innerHTML = '';
}

// Event listeners
clearButton.addEventListener('click', clearHighScores);
goBackButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});