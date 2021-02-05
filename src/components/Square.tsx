/* eslint-disable max-classes-per-file */
import React, { FC } from 'react';

export interface SquarePropsInterface {
  value: string;
  onClick: () => void;
}

export const Square: FC<SquarePropsInterface> = (props) => {
  const { value, onClick } = props;

  return (
    <button className="square" type="button" onClick={onClick}>
      {value}
    </button>
  );
};
