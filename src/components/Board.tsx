import React, { FC } from 'react';
import { Square } from './Square';

export interface BoardPropsInterface {
  squares: string[];
  onClick: (i: number) => void;
}

export const Board: FC<BoardPropsInterface> = (props) => {
  const renderSquare = (i: number): JSX.Element => {
    const { squares, onClick } = props;

    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
