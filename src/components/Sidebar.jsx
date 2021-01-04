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
                  <NavLink exact to="/how-it-works/employer/freelancer-details">
                    Freelancer Details
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/employer/my-projects">
                    My Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/employer/messages">
                    Messages
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

            <li>
              <NavLink exact to="/how-it-works/admin">
                Admin
              </NavLink>
              <ul>
                <li>
                  <NavLink exact to="/how-it-works/admin/pending-users">
                    Pending Users Management
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/admin/projects">
                    Managing Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/admin/project-categories">
                    Managing Project Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/admin/project-skill">
                    Managing Project Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/admin/project-country">
                    Managing Country list
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/admin/private-message">
                    Private Messages
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/admin/portfolios">
                    Freelancer's Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/admin/notification">
                    Notifications
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/admin/pages">
                    Manage Pages
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/admin/contact-forms">
                    contact Forms
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/admin/profiles">
                    Extended Profiles
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/admin/media">
                    Media Library
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/admin/bids">
                    Proposals / Bids
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/admin/bids">
                    Proposals / Bids
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/how-it-works/admin/translation">
                    Translation Management
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
