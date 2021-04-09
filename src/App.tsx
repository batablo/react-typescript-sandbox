import { FC } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'scripts/constants';
import { IndexPage } from 'pages';
import { Game } from 'components/organisms/Game';
import { DragAndDrop } from 'components/organisms/DragAndDrop';

export const App: FC = () => (
  <>
    <Route path={Routes.basePath} exact>
      <IndexPage />
    </Route>
    <Route path={Routes.paths.game}>
      <Game />
    </Route>
    <Route path={Routes.paths.dragAndDrop}>
      <DragAndDrop />
    </Route>
  </>
);
