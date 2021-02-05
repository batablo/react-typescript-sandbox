import React from 'react';
import { Square } from './Square';

export interface BoardPropsInterface {
  squares: string[];
}

export interface BoardStateInterface {
  squares: string[];
  xIsNext: boolean;
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

export class Board extends React.Component<
  BoardPropsInterface,
  BoardStateInterface
> {
  constructor(props: BoardPropsInterface) {
    super(props);
    this.state = {
      squares: Array(9).fill('') as string[],
      xIsNext: true,
    };
  }

  handleClick = (i: number): void => {
    const { squares, xIsNext } = this.state;
    const sliceSquares: string[] = squares.slice();
    // 既に決着が着いているか、マスが埋まっていたらreturn
    if (calculateWinner(sliceSquares) || sliceSquares[i]) {
      return;
    }
    sliceSquares[i] = xIsNext ? 'X' : 'O';
    this.setState({ squares: sliceSquares, xIsNext: !xIsNext });
  };

  renderSquare = (i: number): JSX.Element => {
    const { squares } = this.state;

    return <Square value={squares[i]} onClick={() => this.handleClick(i)} />;
  };

  render(): JSX.Element {
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
