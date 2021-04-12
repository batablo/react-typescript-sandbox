import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from 'scripts/GlobalStyle';
import { App } from './App';

ReactDOM.render(
  <HashRouter>
    <GlobalStyle />
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
