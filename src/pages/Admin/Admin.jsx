import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="content">
      <h1>Admin Workflow</h1>

      <ul>
        <li>
          <Link to="/how-it-works/admin/pending-users">Pending Users Management</Link>
        </li>
        <li>
          <Link to="/how-it-works/admin/projects">Managing Projects</Link>
        </li>
        <li>
          <Link to="/how-it-works/admin/project-categories">Managing Project Categories</Link>
        </li>
        <li>
          <Link to="/how-it-works/admin/project-skill">Managing Project Skills</Link>
        </li>
        <li>
          <Link to="/how-it-works/admin/project-country">Managing Country list</Link>
        </li>
        <li>
          <Link to="/how-it-works/admin/private-message">Private Messages</Link>
        </li>
        <li>
          <Link to="/how-it-works/admin/portfolios">Freelancer's Portfolio</Link>
        </li>
        <li>
          <Link to="/how-it-works/admin/notification">Notifications</Link>
        </li>
        <li>
          <Link to="/how-it-works/admin/pages">Manage Pages</Link>
        </li>
        <li>
          <Link to="/how-it-works/admin/contact-forms">contact Forms</Link>
        </li>
        <li>
          <Link to="/how-it-works/admin/profiles">Extended Profiles</Link>
        </li>
        <li>
          <Link to="/how-it-works/admin/media">Media Library</Link>
        </li>
        <li>
          <Link to="/how-it-works/admin/bids">Proposals / Bids</Link>
        </li>
        <li>
          <Link to="/how-it-works/admin/bids">Proposals / Bids</Link>
        </li>
        <li>
          <Link to="/how-it-works/admin/translation">Translation Management</Link>
        </li>
      </ul>
    </div>
  );
};

export default Admin;
