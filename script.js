const cells = document.querySelectorAll('.cell');
const statusEl = document.getElementById('status');
const overlay = document.getElementById('overlay');
const resultMessage = document.getElementById('resultMessage');
const restartBtn = document.getElementById('restartBtn');

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameOver = false;

function checkWinner() {
  for (const [a, b, c] of WINNING_COMBOS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], combo: [a, b, c] };
    }
  }
  if (board.every(cell => cell !== null)) {
    return { winner: null, combo: [] };
  }
  return null;
}

function handleClick(e) {
  const index = parseInt(e.currentTarget.dataset.index);
  if (gameOver || board[index]) return;

  board[index] = currentPlayer;
  const cell = cells[index];
  cell.textContent = currentPlayer;
  cell.classList.add('taken', currentPlayer.toLowerCase());

  const result = checkWinner();
  if (result) {
    gameOver = true;
    if (result.winner) {
      result.combo.forEach(i => cells[i].classList.add('winning'));
      statusEl.textContent = '';
      resultMessage.textContent = `Player ${result.winner} wins! 🎉`;
    } else {
      statusEl.textContent = '';
      resultMessage.textContent = "It's a draw! 🤝";
    }
    overlay.classList.remove('hidden');
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusEl.textContent = `Player ${currentPlayer}'s turn`;
}

function restartGame() {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  gameOver = false;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.className = 'cell';
  });
  statusEl.textContent = "Player X's turn";
  overlay.classList.add('hidden');
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);
