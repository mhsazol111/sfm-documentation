import React from 'react';
import ModalImage from 'react-modal-image';

import ProjectsDashboard from '../../assets/images/dashboard-projects.png';
import ProjectHover from '../../assets/images/project-hover.png';
import ChangeStatus from '../../assets/images/change-status-project.png';
import ActionArea from '../../assets/images/change-status-edit.png';

const ManagingProjects = () => {
  return (
    <div className="content">
      <h1>Managing Projects</h1>
      <p>
        When an employer/company creates a new project admin will receive an email notification about that. The new project will not be published
        right away. The admin needs to approve the project before the project is publicly accessible. Here's how you can approve the pending projects.
      </p>

      <ul>
        <li>
          1. Visit Admin Dashboard {'->'} Projects. You can find it by clicking{' '}
          <a href="http://switzerland-freelance.ch/wp-admin/edit.php?post_type=project" target="_blank" rel="noreferrer">
            here
          </a>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={ProjectsDashboard} large={ProjectsDashboard} alt="ProjectsDashboard" />
          </div>
        </li>
        <li>
          You'll find a page with every projects ever posted. You can see the project status from the top of the table. Ex: "Published", 'Pending',
          "Archived", etc. Clicking on any of the item will show those projects with that status. Once you hover over a project you can "Preview" the
          project and decide the status of the project.
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={ProjectHover} large={ProjectHover} alt="ProjectHover" />
          </div>
        </li>
        <li>
          One you are ready to approve the profile you can do that in two ways.
          <ul>
            <li>
              1. When you hover over a project item there will be "Quick Edit". Click on that and change the status to publish. Note that you can only
              change the status to "Publish" or "Pending".
              <div className="image mr-4" style={{ maxWidth: '350px' }}>
                <ModalImage small={ChangeStatus} large={ChangeStatus} alt="ChangeStatus" />
              </div>
            </li>
            <li>
              2. You can click on the "Edit" a new edit project page will open. You can also change the project status from there.
              <div className="image mr-4" style={{ maxWidth: '350px' }}>
                <ModalImage small={ActionArea} large={ActionArea} alt="ActionArea" />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ManagingProjects;
