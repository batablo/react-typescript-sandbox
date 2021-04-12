import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import GlobalStyle from 'scripts/GlobalStyle';
import { App } from './App';

const history = createHashHistory({});

ReactDOM.render(
  <Router history={history}>
    <GlobalStyle />
    <App />
  </Router>,
  document.getElementById('root'),
);
