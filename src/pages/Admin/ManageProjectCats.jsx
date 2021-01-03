import React from 'react';
import ModalImage from 'react-modal-image';

import ProjectCats from '../../assets/images/project-category.png';

const ManagingProjectCats = () => {
  return (
    <div className="content">
      <h1>Managing Project Categories</h1>
      <p>These are the categories that shows up on "Projects, Users, Proposals, etc." You can also translate the category from here as well.</p>

      <ul>
        <li>
          Visit Admin Dashboard {'->'} Projects {'->'} Project Category. You can find it by clicking{' '}
          <a
            href="http://switzerland-freelance.ch/wp-admin/edit-tags.php?taxonomy=project_category&post_type=project"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={ProjectCats} large={ProjectCats} alt="ProjectCats" />
          </div>
        </li>
        <li>
          You'll find a page with all the categories available. You can edit any of them by hovering over and clicking on edit. You can also add a
          category from the left side. Please make sure to add the translated label as well.
        </li>
      </ul>
    </div>
  );
};

export default ManagingProjectCats;
