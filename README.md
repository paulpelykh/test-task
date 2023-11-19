Visit [https://test-task-two-brown.vercel.app/](https://test-task-two-brown.vercel.app/) to experience the game.

# Game Board Implementation

This project demonstrates a simple implementation of a rectangular game board in JavaScript, following Object-Oriented Programming (OOP) principles. The game board consists of cells, each containing a game element. The objective is to remove the selected element and its entire associated group from the board, achieved through the use of the Depth-First Search (DFS) algorithm.

## Features

- **Interactive Game Board:** Users can click on a cell to remove the element and its associated group from the board.
- **Group Removal:** The implemented solution utilizes Depth-First Search (DFS) to identify and remove the entire group of the same elements connected to the selected cell.

## Usage

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Open `index.html` in a Browser:**
   Open the `index.html` file in your preferred web browser.

3. **Game Interaction:**
   - Click on a cell to remove the element and its connected group.
   - Use the "Restart Game" button to start a new game with a fresh board.

## Depth-First Search (DFS) Algorithm

Depth-First Search is an algorithm used to traverse or search tree or graph data structures. In this implementation, DFS is employed to explore and identify connected groups of the same elements on the game board. The algorithm starts from the selected cell and recursively explores its neighbors, marking visited cells and removing elements belonging to the same group.

## Implementation Details

- The `GameBoard` class represents the game board, and it is initialized with a specified number of rows, columns, and a canvas element for visualization.
- Elements on the board are represented by symbols, such as '♢', '♣', '♡', and '♠'.
- The solution uses a DFS algorithm to identify and remove connected groups of the same elements.

## Note

This project was created as a test task for a job opportunity, demonstrating proficiency in JavaScript, OOP principles, and algorithmic thinking without relying on third-party frameworks or transpilers.

Feel free to explore, modify, and enhance the code as needed!
