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

interface BoardStateInterface {
  squares: string[];
}
class Board extends React.Component<BoardPropsInterface, BoardStateInterface> {
  constructor(props: BoardPropsInterface) {
    super(props);
    this.state = {
      squares: Array(9).fill('') as string[],
    };
  }

  handleClick(i: number) {
    const { state } = this;
    const squares: string[] = state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares });
  }

  renderSquare = (i: number) => {
    const { squares } = this.state;

    return <Square value={squares[i]} onClick={() => this.handleClick(i)} />;
  };

  render() {
    const status = 'Next player: X';

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
