import React from 'react';
import ModalImage from 'react-modal-image';

import FreelancerPending from '../../assets/images/freelancer-account-pending.png';

const FreeLancerApproval = () => {
  return (
    <div className="content">
      <h1>Waiting for Approval</h1>

      <ul>
        <li>
          <p>
            Once you are signed up your account will be pending for approval. Admin will review the account and once your account is approved you will
            receive an email notification about that. During this pending period you can't access your Dashboard, Account Details, Projects, etc.
            Usually this process takes less than 24 hours.
          </p>
          <div className="flex">
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={FreelancerPending} large={FreelancerPending} alt="FreelancerPending" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FreeLancerApproval;
