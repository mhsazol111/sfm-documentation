import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Introduction from '../pages/Introduction';
import NotFound from '../pages/NotFound';
import Core from '../pages/Core';
import Themes from '../pages/Themes';
import Plugins from '../pages/Plugins';
import FileStructure from '../pages/FileStructure';
import DataBaseStructure from '../pages/DatabaseStructure';
import FeatureUpdates from '../pages/FeatureUpdates';
import FeatureUpdatesDecember from '../pages/FeatureUpdatesDecember';

const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Introduction />
      </Route>

      <Route exact path="/core-infrastructure">
        <Core />
      </Route>

      <Route exact path="/themes">
        <Themes />
      </Route>

      <Route exact path="/plugins">
        <Plugins />
      </Route>

      <Route exact path="/file-structure">
        <FileStructure />
      </Route>

      <Route exact path="/database-structure">
        <DataBaseStructure />
      </Route>

      <Route exact path="/feature-updates">
        <FeatureUpdates />
      </Route>
      <Route exact path="/feature-updates/december">
        <FeatureUpdatesDecember />
      </Route>

      <Route path="/not-found">
        <NotFound />
      </Route>

      <Redirect to="/not-found" />
    </Switch>
  );
};

export default PageRoutes;
