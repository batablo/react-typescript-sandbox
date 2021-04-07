import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'scripts/GlobalStyle';
import { DragAndDrop } from 'components/organisms/DragAndDrop';
// import { Game } from 'components/organisms/Game';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    {/* <Game /> */}
    <DragAndDrop />
  </React.StrictMode>,
  document.getElementById('root'),
);
