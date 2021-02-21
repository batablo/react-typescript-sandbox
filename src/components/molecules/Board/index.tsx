import React, { FC } from 'react';
import styled from 'styled-components';
import { Square } from 'components/atoms/Square';

export interface BoardPropsInterface {
  squares: string[];
  onClick: (i: number) => void;
}

export const Board: FC<BoardPropsInterface> = ({ squares, onClick }) => {
  const renderSquare = (i: number): JSX.Element => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  );

  return (
    <>
      <BoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardRow>
      <BoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardRow>
      <BoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardRow>
    </>
  );
};

const BoardRow = styled.div`
  &::after {
    display: table;
    clear: both;
    content: '';
  }
`;
