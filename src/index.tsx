import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'scripts/GlobalStyle';
import { Game } from 'components/organisms/Game';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Game />
  </React.StrictMode>,
  document.getElementById('root'),
);
