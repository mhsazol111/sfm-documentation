import React from 'react';
import ModalImage from 'react-modal-image';

import CF1 from '../../assets/images/theme-options.png';
import CF2 from '../../assets/images/email-option.png';

const ThemeOptions = () => {
  return (
    <div className="content">
      <h1>Theme Options</h1>
      <p>You can control some global settings of the website from here.</p>

      <ul>
        <li>
          Visit Admin Dashboard {'->'} Theme Options. You can find it by clicking{' '}
          <a href="http://switzerland-freelance.ch/wp-admin/admin.php?page=theme-options" target="_blank" rel="noreferrer">
            here
          </a>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={CF1} large={CF1} alt="CF1" />
          </div>
        </li>
        <li>
          From ‘Theme Options’ you can customize some of the customizable texts that appears to user. Example: “Archive Project Popup”, “Bid Popup
          Content”, “Bid Retraction”, “custom Header Codes”, “Decline Proposal”, “Delete Project Popup”, “Finalize Portage Popup”, “Post a Project
          Popup” and “Terms and Conditions”.
        </li>
        <li>
          From ‘Email Options’ work when triggering specific events. Example: “New user sign up”, “Welcome email to new user”, etc. Also Notification
          Settings works the same way like ‘email options’
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={CF2} large={CF2} alt="CF2" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ThemeOptions;
