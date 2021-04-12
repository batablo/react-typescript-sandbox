import { FC } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Routes } from 'scripts/constants';
import { IndexPage } from 'pages';
import { ReactTutorialPage } from 'pages/ReactTutorial';
import { DragAndDropPage } from 'pages/DragAndDrop';

export const App: FC = () => (
  <>
    <Route path={Routes.basePath} exact>
      <IndexPage />
    </Route>
    <Route path={Routes.paths.reactTutorial}>
      <ReactTutorialPage />
    </Route>
    <Route path={Routes.paths.dragAndDrop}>
      <DragAndDropPage />
    </Route>
  </>
);

export default withRouter(App);
