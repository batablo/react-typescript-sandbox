import React, { FC } from 'react';
import styled from 'styled-components';
import { useDnDSort } from 'scripts/hooks/useDnDSort';
import sample01 from 'assets/images/sample/01.jpeg';
import sample02 from 'assets/images/sample/02.jpeg';
import sample03 from 'assets/images/sample/03.jpeg';
import sample04 from 'assets/images/sample/04.jpeg';
import sample05 from 'assets/images/sample/05.jpeg';
import sample06 from 'assets/images/sample/06.jpeg';
import sample07 from 'assets/images/sample/07.jpeg';
import sample08 from 'assets/images/sample/08.jpeg';
import sample09 from 'assets/images/sample/09.jpeg';

const imageList: string[] = [
  sample01,
  sample02,
  sample03,
  sample04,
  sample05,
  sample06,
  sample07,
  sample08,
  sample09,
];

// useDnDSort()の結果の型
interface Result {
  // key propsに設定する文字列
  key: string;

  // 配列内の画像URL文字列
  value: string;

  // ドラッグ&ドロップ処理で使うイベントのコールバック関数
  events: {
    ref: (value: any) => void;
    onMouseDown: (event: any) => void;
  };
}

export const DragAndDrop: FC = () => {
  // ソート結果とイベントを含んだ配列を受け取る
  const results: Result[] = useDnDSort(imageList);

  return (
    <Body>
      <Container>
        {results.map((item) => (
          <ImageCard key={item.key} {...item.events}>
            <Image src={item.value} alt="ソート可能な画像" />
          </ImageCard>
        ))}
      </Container>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 350px;
  max-height: 500px;
`;

const ImageCard = styled.div`
  width: 100px;
  height: 130px;
  margin: 3;
  overflow: hidden;
  cursor: grab;
  user-select: none;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none;
  object-fit: cover;
`;
