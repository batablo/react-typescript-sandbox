import { FC, useState } from 'react';
import styled from 'styled-components';
import { Board } from 'components/molecules/Board';
import { Moves } from 'components/molecules/Moves';

type Square = 'X' | 'O' | '';

export type Squares = {
  squares: Square[];
};

/**
 * 勝利判定のロジック
 * 縦横ナナメで同じ値が揃っていたら、その値を返す
 */
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

  /**
   * マス目をクリックしたときのロジック
   * 保持されてる履歴(history)から最新の手番を抜き出して、各stateを更新する
   */
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

  // 過去の手番へ戻る時のロジック
  const jumpTo = (step: number) => {
    setXIsNext(step % 2 === 0);
    setStepNumber(step);
  };

  // 現在の手番
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

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
        <Moves history={history} onClick={jumpTo} />
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
