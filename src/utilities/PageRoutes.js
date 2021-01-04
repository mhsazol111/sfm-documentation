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
import FreelancerDetails from '../pages/Employer/FreelancerDetails';
import EmpMyProjects from '../pages/Employer/MyProjects';
import EmpMessages from '../pages/Employer/Messages';
import Admin from '../pages/Admin/Admin';
import PendingUsers from '../pages/Admin/PendingUsers';
import ManagingProjects from '../pages/Admin/ProjectManagement';
import ManagingProjectCats from '../pages/Admin/ManageProjectCats';
import ManagingProjectSkills from '../pages/Admin/ManageProjectSkills';
import ManagingProjectCountry from '../pages/Admin/ManageProjectCountry';
import PrivateMessaging from '../pages/Admin/PrivateMessages';
import FreePortfolios from '../pages/Admin/Portfolios';
import AdminNotifications from '../pages/Admin/Notifications';
import ManagePages from '../pages/Admin/Pages';
import ContactForms from '../pages/Admin/ContactForm';
import Profiles from '../pages/Admin/Profiles';
import Media from '../pages/Admin/Media';
import Bids from '../pages/Admin/Bids';
import Translation from '../pages/Admin/Translation';

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

      <Route exact path="/how-it-works/admin">
        <Admin />
      </Route>
      <Route exact path="/how-it-works/admin/pending-users">
        <PendingUsers />
      </Route>
      <Route exact path="/how-it-works/admin/projects">
        <ManagingProjects />
      </Route>
      <Route exact path="/how-it-works/admin/project-categories">
        <ManagingProjectCats />
      </Route>
      <Route exact path="/how-it-works/admin/project-skill">
        <ManagingProjectSkills />
      </Route>
      <Route exact path="/how-it-works/admin/project-country">
        <ManagingProjectCountry />
      </Route>
      <Route exact path="/how-it-works/admin/private-message">
        <PrivateMessaging />
      </Route>
      <Route exact path="/how-it-works/admin/portfolios">
        <FreePortfolios />
      </Route>
      <Route exact path="/how-it-works/admin/notification">
        <AdminNotifications />
      </Route>
      <Route exact path="/how-it-works/admin/pages">
        <ManagePages />
      </Route>
      <Route exact path="/how-it-works/admin/contact-forms">
        <ContactForms />
      </Route>
      <Route exact path="/how-it-works/admin/profiles">
        <Profiles />
      </Route>
      <Route exact path="/how-it-works/admin/media">
        <Media />
      </Route>
      <Route exact path="/how-it-works/admin/bids">
        <Bids />
      </Route>
      <Route exact path="/how-it-works/admin/translation">
        <Translation />
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
      <Route exact path="/how-it-works/employer/freelancer-details">
        <FreelancerDetails />
      </Route>
      <Route exact path="/how-it-works/employer/my-projects">
        <EmpMyProjects />
      </Route>
      <Route exact path="/how-it-works/employer/messages">
        <EmpMessages />
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
