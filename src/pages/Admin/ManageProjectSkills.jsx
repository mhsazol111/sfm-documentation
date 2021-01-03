import React from 'react';
import ModalImage from 'react-modal-image';

import ProjectSkills from '../../assets/images/project-skills.png';

const ManagingProjectSkills = () => {
  return (
    <div className="content">
      <h1>Managing Project Skills</h1>
      <p>These are the skills that shows up on "Projects, Users, Proposals, etc." You can also translate the skill from here as well.</p>

      <ul>
        <li>
          Visit Admin Dashboard {'->'} Projects {'->'} Skill. You can find it by clicking{' '}
          <a href="http://switzerland-freelance.ch/wp-admin/edit-tags.php?taxonomy=skill&post_type=project" target="_blank" rel="noreferrer">
            here
          </a>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={ProjectSkills} large={ProjectSkills} alt="ProjectSkills" />
          </div>
        </li>
        <li>
          You'll find a page with all the skills available. You can edit any of them by hovering over and clicking on edit. You can also add a skill
          from the left side. Please make sure to add the translated label as well.
        </li>
      </ul>
    </div>
  );
};

export default ManagingProjectSkills;
