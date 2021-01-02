import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar-inner bg-blue-50 lg:mr-5 mr-0 lg:p-5 p-3 rounded-md min-h-screen h-full">
      <ul className="menu">
        <li>
          <NavLink exact to="/">
            Introduction
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/core-infrastructure">
            Core infrastructure
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/themes">
            Themes
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/plugins">
            Plugins
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/file-structure">
            File Structure
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/database-structure">
            Database Structure
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/how-it-works">
            How it Works
          </NavLink>
          <ul>
            <li>
              <NavLink exact to="/how-it-works/freelancer">
                Freelancer
              </NavLink>
              <ul>
                <li>
                  <NavLink exact to="/how-it-works/freelancer/sign-up">
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/freelancer/waiting-for-approval">
                    Waiting for Approval
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/freelancer/update-profile">
                    Updating Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/freelancer/dashboard">
                    Dashboard First Look
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/freelancer/browse-projects">
                    Browse Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/freelancer/project-details">
                    Project Details
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/freelancer/submit-proposal">
                    Submit Proposal
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/freelancer/my-projects">
                    My Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/freelancer/portfolio">
                    Portfolios & Messages
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/freelancer/notification">
                    Notification Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/freelancer/help-support">
                    Help and Support
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink exact to="/how-it-works/employer">
                Employer
              </NavLink>
              <ul>
                <li>
                  <NavLink exact to="/how-it-works/employer/sign-up">
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/employer/waiting-for-approval">
                    Waiting for Approval
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/employer/update-profile">
                    Updating Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/employer/dashboard">
                    Dashboard First Look
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/employer/browse-freelancers">
                    Browse Freelancers
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/employer/project-details">
                    Project Details
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/employer/my-projects">
                    My Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/employer/portfolio">
                    Portfolios & Messages
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/employer/notification">
                    Notification Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/employer/help-support">
                    Help and Support
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <NavLink exact to="/feature-updates">
            Feature Updates
          </NavLink>
          <ul>
            <li>
              <NavLink exact to="/feature-updates/december">
                December Updates
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
