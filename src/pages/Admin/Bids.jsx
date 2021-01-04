import React from 'react';
import ModalImage from 'react-modal-image';

import CF1 from '../../assets/images/bids.png';

const Bids = () => {
  return (
    <div className="content">
      <h1>Proposals from Freelancers</h1>

      <ul>
        <li>
          Visit Admin Dashboard {'->'} Bids. You can find it by clicking{' '}
          <a href="http://switzerland-freelance.ch/wp-admin/post_type=bid" target="_blank" rel="noreferrer">
            here
          </a>
          <p>You can edit the Bid by clicking on the “edit” button.</p>
          <p>You can view the Bid by clicking on the “view” button.</p>
          <p>You can see the project title where bids come from.</p>
          <p>Also you can delete the Bid by clicking on the “trash” button. </p>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={CF1} large={CF1} alt="CF1" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Bids;
