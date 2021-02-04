/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface SquarePropsInterface {
  value: string;
  onClick: () => void;
}

const Square = (props: SquarePropsInterface) => {
  const { value, onClick } = props;

  return (
    <button className="square" type="button" onClick={onClick}>
      {value}
    </button>
  );
};

interface BoardPropsInterface {
  squares: string[];
}

const calculateWinner = (squares: string[]): string => {
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

  return '';
};

interface BoardStateInterface {
  squares: string[];
  xIsNext: boolean;
}
class Board extends React.Component<BoardPropsInterface, BoardStateInterface> {
  constructor(props: BoardPropsInterface) {
    super(props);
    this.state = {
      squares: Array(9).fill('') as string[],
      xIsNext: true,
    };
  }

  handleClick(i: number) {
    const { squares, xIsNext } = this.state;
    const sliceSquares: string[] = squares.slice();
    // 既に決着が着いているか、マスが埋まっていたらreturn
    if (calculateWinner(sliceSquares) || sliceSquares[i]) {
      return;
    }
    sliceSquares[i] = xIsNext ? 'X' : 'O';
    this.setState({ squares: sliceSquares, xIsNext: !xIsNext });
  }

  renderSquare = (i: number) => {
    const { squares } = this.state;

    return <Square value={squares[i]} onClick={() => this.handleClick(i)} />;
  };

  render() {
    const { squares, xIsNext } = this.state;
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={Array(9).fill('')} />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
