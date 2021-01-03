import React from 'react';
import ModalImage from 'react-modal-image';

import MyProjectsImg from '../../assets/images/emp-my-projects.png';

const EmpMyProjects = () => {
  return (
    <div className="content">
      <h1>My Projects</h1>
      <p>All your previous and currently running projects will show up here.</p>
      <ul>
        <li>
          <strong>1. All projects:</strong> Its pretty self explanatory.
        </li>
        <li>
          <p>
            <strong>Pending projects:</strong> These are the projects that you have posted but haven't assigned to any freelancers yet.
          </p>
        </li>
        <li>
          <p>
            <strong>Published Projects:</strong> These are the projects that you've created and admin approved them.
          </p>
        </li>
        <li>
          <p>
            <strong>Ongoing projects:</strong> These are the projects that you have posted and someone is working on it to complete.
          </p>
        </li>
        <li>
          <p>
            <strong>Completed projects:</strong> The projects you've assigned to someone and they completed the tasks successfully.
          </p>
        </li>
        <li>
          <p>
            <strong>Archived projects:</strong> These projects are no longer visible to outside user/freelancer except you. You can manually set the
            projects to published again from edit project option.
          </p>
        </li>
        <li>
          <p>
            <strong>Cancelled projects:</strong> These are the projects that you declined or someone couldn't completed them.
          </p>
        </li>
      </ul>
      <div className="flex">
        <div className="image mr-4" style={{ maxWidth: '350px' }}>
          <ModalImage small={MyProjectsImg} large={MyProjectsImg} alt="MyProjectsImg" />
        </div>
      </div>
    </div>
  );
};

export default EmpMyProjects;
