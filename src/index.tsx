import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import GlobalStyle from 'scripts/GlobalStyle';
import { App } from './App';

// const history = createBrowserHistory({});

ReactDOM.render(
  <Router history={createBrowserHistory({})}>
    <GlobalStyle />
    <App />
  </Router>,
  document.getElementById('root'),
);
