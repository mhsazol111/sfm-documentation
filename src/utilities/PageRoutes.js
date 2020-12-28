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
import HowItWorks from '../pages/HowItWorks';
import Freelancer from '../pages/Freelancer/Freelancer';
import FreeLancerSignUp from '../pages/Freelancer/SignUp';
import FreeLancerApproval from '../pages/Freelancer/Approval';
import FreelancerUpdateProfile from '../pages/Freelancer/UpdateProfile';

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

      <Route exact path="/how-it-works">
        <HowItWorks />
      </Route>
      <Route exact path="/how-it-works/freelancer">
        <Freelancer />
      </Route>
      <Route exact path="/how-it-works/freelancer/sign-up">
        <FreeLancerSignUp />
      </Route>
      <Route exact path="/how-it-works/freelancer/waiting-for-approval">
        <FreeLancerApproval />
      </Route>
      <Route exact path="/how-it-works/freelancer/update-profile">
        <FreelancerUpdateProfile />
      </Route>

      <Route path="/not-found">
        <NotFound />
      </Route>

      <Redirect to="/not-found" />
    </Switch>
  );
};

export default PageRoutes;
