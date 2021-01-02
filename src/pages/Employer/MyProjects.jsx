import React from 'react';
import ModalImage from 'react-modal-image';

import MyProjectsImg from '../../assets/images/my-projects.png';

const MyProjects = () => {
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
            <strong>Pending projects:</strong> These are the projects that you have submitted proposal but haven't received any confirmation about
            that from the project employer.
          </p>
        </li>
        <li>
          <p>
            <strong>Ongoing Projects:</strong> Projects that you are currently working on. Projects that you've won through bidding or client
            invitation.
          </p>
        </li>
        <li>
          <p>
            <strong>Completed projects:</strong> These are the projects that you have been worked on and I completed and marked completed by the
            project employer
          </p>
        </li>
        <li>
          <p>
            <strong>Declined projects:</strong> These are the projects that the client declined or you couldn't completed them.
          </p>
        </li>
        <li>
          <p>
            <strong>Cancelled projects:</strong> These are the projects that you declined or you couldn't completed them.
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

export default MyProjects;
