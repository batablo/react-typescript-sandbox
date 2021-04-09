import { FC } from 'react';
import styled from 'styled-components';
import { Squares } from 'components/organisms/Game';

export interface MovesPropsInterface {
  /**
   * 手番の履歴
   */
  history: Squares[];
  /**
   * クリックイベント
   * 過去の手番に遷移する'jumpTo'イベントを受け取る
   */
  onClick: (i: number) => void;
}

export const Moves: FC<MovesPropsInterface> = ({ history, onClick }) => {
  const MoveList = history.map((_, move: number) => {
    const desc = move ? `Go to move #${move}` : `Go to move start`;

    return (
      // eslint-disable-next-line react/no-array-index-key
      <li key={move}>
        <button type="button" onClick={() => onClick(move)}>
          {desc}
        </button>
      </li>
    );
  });

  return <MovesWrapper>{MoveList}</MovesWrapper>;
};

const MovesWrapper = styled.ol`
  padding-left: 30px;
`;
