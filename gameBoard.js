class GameBoard {
  constructor(rows, columns, canvas) {
    this.rows = rows;
    this.columns = columns;
    this.cellSize = 40; // Size of each cell on the canvas
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.board = this.initializeBoard();
    this.canvas.addEventListener('click', this.handleCanvasClick.bind(this));
    this.drawBoard();
  }

  restartGame() {
    this.board = this.initializeBoard();
    this.drawBoard();
  }

  initializeBoard() {
    const elements = ['♢', '♣', '♡', '♠'];
    const board = [];

    for (let i = 0; i < this.rows; i++) {
      const row = Array.from({ length: this.columns }, () =>
        this.getRandomElement(elements)
      );
      board.push(row);
    }

    return board;
  }

  drawBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.drawCell(i, j, this.board[i][j]);
      }
    }
  }

  getRandomElement(elements) {
    const randomIndex = Math.floor(Math.random() * elements.length);
    return elements[randomIndex];
  }

  drawCell(row, col, element) {
    const x = col * this.cellSize;
    const y = row * this.cellSize;

    // Set different colors for each symbol
    switch (element) {
      case '♢':
        this.ctx.fillStyle = '#FB5607';
        break;
      case '♣':
        this.ctx.fillStyle = '#FF006E';
        break;
      case '♡':
        this.ctx.fillStyle = '#8338EC';
        break;
      case '♠':
        this.ctx.fillStyle = '#3A86FF';
        break;
      // for deleted elements
      default:
        this.ctx.fillStyle = '#000';
    }

    this.ctx.fillRect(x, y, this.cellSize, this.cellSize);

    // Set text color to white for better visibility
    if (element) {
      this.ctx.fillStyle = '#FFF';
    }
    this.ctx.fillText(element, x + this.cellSize / 2, y + this.cellSize / 2);
  }

  handleCanvasClick(event) {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const clickedRow = Math.floor(mouseY / this.cellSize);
    const clickedCol = Math.floor(mouseX / this.cellSize);

    this.removeGroup(clickedRow, clickedCol);
    this.drawBoard();
  }

  removeGroup(row, column) {
    const targetElement = this.board[row][column];

    if (!targetElement) {
      return;
    }

    const visited = new Set();

    // Depth-first search algorithm
    const dfs = (currentRow, currentColumn) => {
      if (
        currentRow < 0 ||
        currentRow >= this.rows ||
        currentColumn < 0 ||
        currentColumn >= this.columns ||
        visited.has(`${currentRow},${currentColumn}`) ||
        this.board[currentRow][currentColumn] !== targetElement
      ) {
        return;
      }

      visited.add(`${currentRow},${currentColumn}`);
      this.board[currentRow][currentColumn] = null;

      dfs(currentRow - 1, currentColumn);
      dfs(currentRow + 1, currentColumn);
      dfs(currentRow, currentColumn - 1);
      dfs(currentRow, currentColumn + 1);
    };

    dfs(row, column);
  }
}
document.addEventListener('DOMContentLoaded', function () {
  // Example usage:
  const canvas = document.getElementById('gameCanvas');
  const game = new GameBoard(10, 10, canvas);

  // Add event listener for restart button
  const restartButton = document.getElementById('restartButton');
  restartButton.addEventListener('click', () => game.restartGame());
});
