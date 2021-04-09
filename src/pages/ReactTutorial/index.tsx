import { FC } from 'react';
import styled from 'styled-components';
import { Game } from 'components/organisms/Game';

export const ReactTutorialPage: FC = () => (
  <Wrapper>
    <Game />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 64px;
  overflow: hidden;
  background-color: lightgray;
`;
