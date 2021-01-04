import React from 'react';
import ModalImage from 'react-modal-image';

import PF1 from '../../assets/images/profile-view.png';
import PF2 from '../../assets/images/profiles-edit.png';
import PF3 from '../../assets/images/profile-tags.png';

const Profiles = () => {
  return (
    <div className="content">
      <h1>User Profile's Extended Info</h1>

      <ul>
        <li>
          Visit Admin Dashboard {'->'} Profiles. You can find it by clicking{' '}
          <a href="http://switzerland-freelance.ch/wp-admin/post_type=fre_profile" target="_blank" rel="noreferrer">
            here
          </a>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={PF1} large={PF1} alt="PF1" />
          </div>
        </li>
        <li>
          You can Edit the Profile by clicking on the "edit" button.
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={PF2} large={PF2} alt="PF2" />
          </div>
        </li>
        <li>
          You can View the Profile by clicking on the "view" button.
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={PF3} large={PF3} alt="PF3" />
          </div>
        </li>
        <li>These are Author selected ‘Projects Categories’, ‘Languages’, ‘Countries’, and ‘skills’</li>
      </ul>
    </div>
  );
};

export default Profiles;
