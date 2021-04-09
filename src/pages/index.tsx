import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const IndexPage: FC = () => {
  return (
    <>
      <Container>
        <Header>
          <h1>SandBox</h1>
        </Header>
        <Main>
          <PageLink>
            <Link to="/game">チュートリアル(五目並べ)</Link>
            <Link to="/dragAndDrop">ドラッグドロップで画像並び替え</Link>
          </PageLink>
        </Main>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: white;
  text-align: center;
  background-color: gray;
`;

const Header = styled.header`
  margin-bottom: 40px;
  font-size: 28px;

  > h1 {
    margin-top: 16px;
  }
`;

const Main = styled.main`
  font-size: 16px;
`;

const PageLink = styled.div`
  > a {
    display: block;
    margin-top: 8px;

    &:hover {
      opacity: 0.9;
      transform: scale(1.05);
    }
  }
`;
