import { FC } from 'react';
import styled from 'styled-components';
import { DragAndDrop } from 'components/organisms/DragAndDrop';

export const DragAndDropPage: FC = () => (
  <Wrapper>
    <DragAndDrop />
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
