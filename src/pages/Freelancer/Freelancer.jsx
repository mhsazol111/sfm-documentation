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
      </ul>
    </div>
  );
};

export default Freelancer;
