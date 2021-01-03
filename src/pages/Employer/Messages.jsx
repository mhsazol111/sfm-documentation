import React from 'react';
import ModalImage from 'react-modal-image';

import Messages from '../../assets/images/messages.png';

const EmpMessages = () => {
  return (
    <div className="content">
      <h1>Messages</h1>

      <ul>
        <li>
          All your message archive will be here. The messages are based on projects.
          <div className="flex">
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={Messages} large={Messages} alt="Messages" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EmpMessages;
