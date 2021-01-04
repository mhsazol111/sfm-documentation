import React from 'react';
import ModalImage from 'react-modal-image';

import PF1 from '../../assets/images/media.png';

const Media = () => {
  return (
    <div className="content">
      <h1>Media Library</h1>

      <ul>
        <li>
          Visit Admin Dashboard {'->'} Media. You can find it by clicking{' '}
          <a href="http://switzerland-freelance.ch/wp-admin/upload.php" target="_blank" rel="noreferrer">
            here
          </a>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={PF1} large={PF1} alt="PF1" />
          </div>
        </li>
        <li>
          <p>All Uploaded Media files Stored in Media post type.</p>
          <p>You can also add new photo/file by clicking “Add New”</p>
          <p>You can delete files by clicking an item. </p>
        </li>
      </ul>
    </div>
  );
};

export default Media;
