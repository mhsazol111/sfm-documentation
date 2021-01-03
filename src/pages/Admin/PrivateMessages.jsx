import React from 'react';
import ModalImage from 'react-modal-image';

import PrivateMessage from '../../assets/images/private-message.png';

const PrivateMessaging = () => {
  return (
    <div className="content">
      <h1>Private Messages</h1>
      <p>From here admin can monitor the conversation between employers and freelancers.</p>

      <ul>
        <li>
          Visit Admin Dashboard {'->'} Private Message. You can find it by clicking{' '}
          <a href="http://switzerland-freelance.ch/wp-admin/admin.php?page=la-private-messages" target="_blank" rel="noreferrer">
            here
          </a>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={PrivateMessage} large={PrivateMessage} alt="PrivateMessage" />
          </div>
        </li>
        <li>You can read the whole message by clicking on the "Message from the message column".</li>
      </ul>
    </div>
  );
};

export default PrivateMessaging;
