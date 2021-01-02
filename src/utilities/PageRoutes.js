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
import FreelancerBrowseProjects from '../pages/Freelancer/BrowseProjects';
import Dashboard from '../pages/Freelancer/Dashboard';
import ProjectDetails from '../pages/Freelancer/ProjectDetails';
import MyProjects from '../pages/Freelancer/MyProjects';
import Portfolio from '../pages/Freelancer/Portfolio';
import Notifications from '../pages/Freelancer/Notifications';
import HelpSupport from '../pages/Freelancer/HelpSupport';
import EmpSignUp from '../pages/Employer/SignUp';
import EmpApproval from '../pages/Employer/Approval';
import EmpUpdateProfile from '../pages/Employer/UpdateProfile';
import FrSubmitProposal from '../pages/Freelancer/SubmitProposal';
import Employer from '../pages/Employer/Employer';
import EmpDashboard from '../pages/Employer/Dashboard';
import BrowseFreelancers from '../pages/Employer/BrowseFreelancers';

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
      <Route exact path="/how-it-works/freelancer/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/how-it-works/freelancer/browse-projects">
        <FreelancerBrowseProjects />
      </Route>
      <Route exact path="/how-it-works/freelancer/project-details">
        <ProjectDetails />
      </Route>
      <Route exact path="/how-it-works/freelancer/my-projects">
        <MyProjects />
      </Route>
      <Route exact path="/how-it-works/freelancer/submit-proposal">
        <FrSubmitProposal />
      </Route>
      <Route exact path="/how-it-works/freelancer/portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/how-it-works/freelancer/notification">
        <Notifications />
      </Route>
      <Route exact path="/how-it-works/freelancer/help-support">
        <HelpSupport />
      </Route>

      <Route exact path="/how-it-works/employer">
        <Employer />
      </Route>
      <Route exact path="/how-it-works/employer/sign-up">
        <EmpSignUp />
      </Route>
      <Route exact path="/how-it-works/employer/waiting-for-approval">
        <EmpApproval />
      </Route>
      <Route exact path="/how-it-works/employer/update-profile">
        <EmpUpdateProfile />
      </Route>
      <Route exact path="/how-it-works/employer/dashboard">
        <EmpDashboard />
      </Route>
      <Route exact path="/how-it-works/employer/browse-freelancers">
        <BrowseFreelancers />
      </Route>
      <Route exact path="/how-it-works/employer/project-details">
        <ProjectDetails />
      </Route>
      <Route exact path="/how-it-works/employer/my-projects">
        <MyProjects />
      </Route>
      <Route exact path="/how-it-works/employer/portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/how-it-works/employer/notification">
        <Notifications />
      </Route>
      <Route exact path="/how-it-works/employer/help-support">
        <HelpSupport />
      </Route>

      <Route path="/not-found">
        <NotFound />
      </Route>

      <Redirect to="/not-found" />
    </Switch>
  );
};

export default PageRoutes;
