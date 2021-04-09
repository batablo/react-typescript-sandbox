import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Game } from 'components/organisms/Game';

export const ReactTutorialPage: FC = () => (
  <Wrapper>
    <Game />
    <LinkText>
      <Link to="/">TopPage</Link>
    </LinkText>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 64px;
  overflow: hidden;
  background-color: lightgray;
`;

const LinkText = styled.div`
  position: absolute;
  bottom: 32px;
  font-size: 24px;
  color: blue;
`;
