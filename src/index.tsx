import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'scripts/GlobalStyle';
import { App } from './App';

ReactDOM.render(
  <BrowserRouter basename="/react-typescript-sandbox">
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
