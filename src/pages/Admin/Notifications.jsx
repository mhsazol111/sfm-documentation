import React from 'react';
import ModalImage from 'react-modal-image';

import PrivateMessage from '../../assets/images/Notifications_All_Notifications.png';

const AdminNotifications = () => {
  return (
    <div className="content">
      <h1>Notifications</h1>

      <ul>
        <li>
          Visit Admin Dashboard {'->'} Notifications. You can find it by clicking{' '}
          <a href="http://switzerland-freelance.ch/wp-admin/edit.php?post_type=notify" target="_blank" rel="noreferrer">
            here
          </a>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={PrivateMessage} large={PrivateMessage} alt="PrivateMessage" />
          </div>
        </li>
        <li>Notifications: You can see all the notifications such as Freelancer, Bids, Messaging from here.</li>
        <li>I don't think admin should tinker or delete the notifications. These are purely just for functional cause.</li>
      </ul>
    </div>
  );
};

export default AdminNotifications;
