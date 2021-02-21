import React, { FC } from 'react';
import styled from 'styled-components';

export interface SquarePropsInterface {
  value: string;
  onClick: () => void;
}

export const Square: FC<SquarePropsInterface> = ({ value, onClick }) => (
  <Button type="button" onClick={onClick}>
    {value}
  </Button>
);

const Button = styled.button`
  float: left;
  width: 34px;
  height: 34px;
  padding: 0;
  margin-top: -1px;
  margin-right: -1px;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  text-align: center;
  background: #fff;
  border: 1px solid #999;

  &:focus {
    background: #ddd;
    outline: none;
  }
`;
