import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Board } from 'components/molecules/Board';

type Square = 'X' | 'O' | '';

export type Squares = {
  squares: Square[];
};

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

export const Game: FC = () => {
  const [history, setHistory] = useState<Squares[]>([
    {
      squares: Array(9).fill('') as Square[],
    },
  ]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [stepNumber, setStepNumber] = useState<number>(0);

  const handleClick = (i: number): void => {
    const pastHistory = history.slice(0, stepNumber + 1);
    const current = pastHistory[pastHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(pastHistory.concat([{ squares }]));
    setXIsNext(!xIsNext);
    setStepNumber(pastHistory.length);
  };

  const jumpTo = (step: number) => {
    setXIsNext(step % 2 === 0);
    setStepNumber(step);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((_, move: number) => {
    const desc = move ? `Go to move #${move}` : `Go to move start`;

    return (
      // eslint-disable-next-line react/no-array-index-key
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>
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
    <GameWrapper>
      <GameBoard>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </GameBoard>
      <GameInfo>
        <Status>{status}</Status>
        <MovesList>{moves}</MovesList>
      </GameInfo>
    </GameWrapper>
  );
};

const GameWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const GameBoard = styled.div`
  margin: 0;
`;

const GameInfo = styled.div`
  margin-left: 20px;
`;

const Status = styled.div`
  margin-bottom: 10px;
`;

const MovesList = styled.ol`
  padding-left: 30px;
`;
