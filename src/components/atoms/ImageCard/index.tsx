import React, { FC } from 'react';
import styled from 'styled-components';

type ImageCardProps<T> = {
  index: string;
  value: T;
  events: {
    ref: (element: HTMLElement | null) => void;
    onMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
  };
};

export const ImageCard: FC<ImageCardProps<string>> = ({
  index,
  value,
  events,
}) => (
  <ImageCardWrapper key={index} {...events}>
    <Image src={value} alt="ソート可能な画像" />
  </ImageCardWrapper>
);

const ImageCardWrapper = styled.div`
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
