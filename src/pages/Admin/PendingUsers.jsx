import React from 'react';
import ModalImage from 'react-modal-image';

import PendingUsersImg from '../../assets/images/pending-users.png';
import PendingUsersProfile from '../../assets/images/pending-profile.png';
import ProfileStatus from '../../assets/images/profile-status.png';
import ActionArea from '../../assets/images/action-panel.png';

const PendingUsers = () => {
  return (
    <div className="content">
      <h1>Pending Users</h1>
      <p>
        When a user registers for a new account the admin will receive an email notification about that. The new user account will not be activated
        right away. The admin needs to approve the account before the user can use the new account. Here's how you can approve the pending accounts.
      </p>

      <ul>
        <li>
          1. Visit Admin Dashboard {'->'} Users {'->'} Pending Users. You can find it by clicking{' '}
          <a href="http://switzerland-freelance.ch/wp-admin/users.php?page=pending_users" target="_blank" rel="noreferrer">
            here
          </a>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={PendingUsersImg} large={PendingUsersImg} alt="PendingUsersImg" />
          </div>
        </li>
        <li>
          You'll find a page with every pending users available that needs to be approved. You can visit view the user's profile by clicking on the
          "View Profile" button. It'll show a page like that. You can review the information and decide your action.
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={PendingUsersProfile} large={PendingUsersProfile} alt="PendingUsersProfile" />
          </div>
        </li>
        <li>
          One you are ready to approve the profile you can do that in two ways.
          <ul>
            <li>
              1. By changing the "Account Status" from the profile view page and clicking "Update User" button.
              <div className="image mr-4" style={{ maxWidth: '350px' }}>
                <ModalImage small={ProfileStatus} large={ProfileStatus} alt="ProfileStatus" />
              </div>
            </li>
            <li>
              2. When you're in the "Pending User's" page you can directly approve/delete the pending account by clicking on the respected option from
              the "Action" area.
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

export default PendingUsers;
