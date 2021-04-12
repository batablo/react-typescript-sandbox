import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'scripts/GlobalStyle';
import { App } from './App';

const ROUTER_BASENAME =
  process.env.NODE_ENV === 'development' ? '/' : '/react-typescript-sandbox';

ReactDOM.render(
  <BrowserRouter basename={ROUTER_BASENAME}>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
