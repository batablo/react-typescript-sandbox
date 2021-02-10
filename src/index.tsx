import React from 'react';
import ReactDOM from 'react-dom';
import { Board } from './components/Board';
import './index.css';

type Square = 'X' | 'O' | '';

type Squares = {
  squares: Square[];
};

interface GameStateInterface {
  history: Squares[];
  xIsNext: boolean;
  stepNumber: number;
}

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};
class Game extends React.Component<unknown, GameStateInterface> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill('') as Square[],
        },
      ],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  handleClick = (i: number): void => {
    const { history, xIsNext, stepNumber } = this.state;
    const pastHistory = history.slice(0, stepNumber + 1);
    console.log(pastHistory);
    const current = pastHistory[pastHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      history: pastHistory.concat([{ squares }]),
      xIsNext: !xIsNext,
      stepNumber: pastHistory.length,
    });
  };

  jumpTo = (step: number) => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  };

  render() {
    const { history, xIsNext, stepNumber } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((_, move: number) => {
      const desc = move ? `Go to move #${move}` : `Go to move start`;

      return (
        // eslint-disable-next-line react/no-array-index-key
        <li key={move}>
          <button type="button" onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
