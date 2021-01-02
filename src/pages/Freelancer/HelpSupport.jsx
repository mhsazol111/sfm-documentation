import React from 'react';
import ModalImage from 'react-modal-image';

import NS from '../../assets/images/help-support.png';

const HelpSupport = () => {
  return (
    <div className="content">
      <h1>Help and Support</h1>
      <p>If you have any problem or complain about anything you can fill up this form and we'll get back to you as soon as possible.</p>
      <div className="flex">
        <div className="image mr-4" style={{ maxWidth: '350px' }}>
          <ModalImage small={NS} large={NS} alt="NS" />
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
