/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Board } from './components/Board';
import './index.css';

const Game: FC = () => {
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
};

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
