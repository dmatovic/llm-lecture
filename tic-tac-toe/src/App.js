// import React, { useState } from 'react';

// function App() {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);
//   const winner = calculateWinner(board);

//   function handleClick(i) {
//     const squares = [...board];
//     if (winner || squares[i]) return;
//     squares[i] = xIsNext ? 'X' : 'O';
//     setBoard(squares);
//     setXIsNext(!xIsNext);
//   }

//   function renderSquare(i) {
//     return (
//       <button className="square" onClick={() => handleClick(i)}>
//         {board[i]}
//       </button>
//     );
//   }
  
//   const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

//   function calculateWinner(squares) {
//     const lines = [    [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
  
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
  
//     return null;
//   }
  

//   return (
//     <div className="game">
//       <div className="game-board"></div>
//     </div>
//   );
// }

// export default App;

















// import React from 'react';
// import Board from './Board';
// import Game from './Game';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [
//         {
//           squares: Array(9).fill(null),
//         },
//       ],
//       stepNumber: 0,
//       xIsNext: true,
//     };
//   }

//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       history: history.concat([
//         {
//           squares: squares,
//         },
//       ]),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext,
//     });
//   }
  

//   jumpTo(step) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: step % 2 === 0,
//     });
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);

//     const moves = history.map((step, move) => {
//       const desc = move ? 'Go to move #' + move : 'Go to game start';
//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>{desc}</button>
//         </li>
//       );
//     });

//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else if (!current.squares.includes(null)) {
//       status = 'Draw!';
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board
//             squares={current.squares}
//             onClick={(i) => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// function getRandomMove(board) {
//   const row = Math.floor(Math.random() * board.length);
//   const col = Math.floor(Math.random() * board[0].length);
//   return [row, col];
// }


// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// export default App;










import React from 'react';
import Game from './Game';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tic Tac Toe</h1>
        </header>
        <p className="App-intro">
          To get started, click any square on the board to place an X. Switch to
          single-player mode to play against the computer.
        </p>
        <Game />
      </div>
    );
  }
}

export default App;