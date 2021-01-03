import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="content">
      <h1>How it works</h1>

      <p>
        Here' how the site work. There are 3 kinds of roles in this website: Freelancer, Employer, Admin. They both have different type of workflow.
        We'll try to describe a little about that here.
      </p>

      <ul>
        <li>
          <Link to="/how-it-works/admin">Admin</Link>
        </li>
        <li>
          <Link to="/how-it-works/freelancer">Freelancer</Link>
        </li>
        <li>
          <Link to="/how-it-works/employer">Employer</Link>
        </li>
      </ul>
    </div>
  );
};

export default HowItWorks;
