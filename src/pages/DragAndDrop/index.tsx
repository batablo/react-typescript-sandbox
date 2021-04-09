import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DragAndDrop } from 'components/organisms/DragAndDrop';

export const DragAndDropPage: FC = () => (
  <Wrapper>
    <DragAndDrop />
    <LinkText>
      <Link to="/">TopPage</Link>
    </LinkText>
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

const LinkText = styled.div`
  position: absolute;
  bottom: 32px;
  font-size: 24px;
  color: blue;
`;
