import React from 'react';
import { Link } from 'react-router-dom';

const Freelancer = () => {
  return (
    <div className="content">
      <h1>Freelancer Workflow</h1>

      <ul>
        <li>
          <Link to="/how-it-works/freelancer/sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="/how-it-works/freelancer/waiting-for-approval">Waiting for Approval</Link>
        </li>
        <li>
          <Link to="/how-it-works/freelancer/update-profile">Updating Profile</Link>
        </li>
        <li>
          <Link to="/how-it-works/freelancer/dashboard">Dashboard First Look</Link>
        </li>
        <li>
          <Link to="/how-it-works/freelancer/browse-projects">Browse Projects</Link>
        </li>
        <li>
          <Link to="/how-it-works/freelancer/project-details">Project Details</Link>
        </li>
        <li>
          <Link to="/how-it-works/freelancer/my-projects">My Projects</Link>
        </li>
        <li>
          <Link to="/how-it-works/freelancer/portfolio">Portfolios & Messages</Link>
        </li>
        <li>
          <Link to="/how-it-works/freelancer/notification">Notification Settings</Link>
        </li>
        <li>
          <Link to="/how-it-works/freelancer/help-support">Help and Support</Link>
        </li>
      </ul>
    </div>
  );
};

export default Freelancer;
