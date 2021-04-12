import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from 'scripts/GlobalStyle';
import { App } from './App';

// const ROUTER_BASENAME =
//   process.env.NODE_ENV === 'development' ? '/' : '/react-typescript-sandbox';

ReactDOM.render(
  <HashRouter>
    <GlobalStyle />
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
