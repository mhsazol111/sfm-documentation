import React from 'react';
import ModalImage from 'react-modal-image';

import ProjectDetailsImg from '../../assets/images/project-details.png';

const ProjectDetails = () => {
  return (
    <div className="content">
      <h1>Project Details</h1>

      <ul>
        <li>
          <strong>1. Important information about project</strong>
        </li>
        <li>
          <strong>2. Project Details and requirements</strong>
        </li>
        <li>
          <strong>3. Employer Info</strong>
        </li>
        <li>
          <strong>4. The proposal you've already sent to this project</strong>
        </li>
      </ul>
      <div className="flex">
        <div className="image mr-4" style={{ maxWidth: '350px' }}>
          <ModalImage small={ProjectDetailsImg} large={ProjectDetailsImg} alt="ProjectDetailsImg" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
