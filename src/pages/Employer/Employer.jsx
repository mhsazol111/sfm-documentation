import React from 'react';
import { Link } from 'react-router-dom';

const Employer = () => {
  return (
    <div className="content">
      <h1>Employer Workflow</h1>

      <ul>
        <li>
          <Link to="/how-it-works/employer/sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="/how-it-works/employer/waiting-for-approval">Waiting for Approval</Link>
        </li>
        <li>
          <Link to="/how-it-works/employer/update-profile">Updating Profile</Link>
        </li>
        <li>
          <Link to="/how-it-works/employer/dashboard">Dashboard First Look</Link>
        </li>
        <li>
          <Link to="/how-it-works/employer/browse-freelancers">Browse Freelancers</Link>
        </li>
        <li>
          <Link to="/how-it-works/employer/freelancer-details">Freelancer Details</Link>
        </li>
        <li>
          <Link to="/how-it-works/employer/my-projects">My Projects</Link>
        </li>
        <li>
          <Link to="/how-it-works/employer/portfolio">Messages</Link>
        </li>
        <li>
          <Link to="/how-it-works/employer/notification">Notification Settings</Link>
        </li>
        <li>
          <Link to="/how-it-works/employer/help-support">Help and Support</Link>
        </li>
      </ul>
    </div>
  );
};

export default Employer;
