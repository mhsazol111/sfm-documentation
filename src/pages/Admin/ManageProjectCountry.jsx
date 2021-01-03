import React from 'react';
import ModalImage from 'react-modal-image';

import ProjectCountry from '../../assets/images/category-country.png';

const ManagingProjectCountry = () => {
  return (
    <div className="content">
      <h1>Managing Project country</h1>
      <p>These are the country that shows up on "Projects, Users, Proposals, etc." You can also translate the skill from here as well.</p>

      <ul>
        <li>
          Visit Admin Dashboard {'->'} Projects {'->'} Countries. You can find it by clicking{' '}
          <a href="http://switzerland-freelance.ch/wp-admin/edit-tags.php?taxonomy=skill&post_type=project" target="_blank" rel="noreferrer">
            here
          </a>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={ProjectCountry} large={ProjectCountry} alt="ProjectCountry" />
          </div>
        </li>
        <li>
          You'll find a page with all the country available. You can edit any of them by hovering over and clicking on edit. You can also add a
          country from the left side. Please make sure to add the translated label as well.
        </li>
      </ul>
    </div>
  );
};

export default ManagingProjectCountry;
