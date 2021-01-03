import React from 'react';
import ModalImage from 'react-modal-image';

import FreelancerDetailsImg from '../../assets/images/freelancer-details.png';

const FreelancerDetails = () => {
  return (
    <div className="content">
      <h1>Freelancer Details</h1>

      <ul>
        <li>
          <strong>1. Freelancer Name & bio</strong>
        </li>
        <li>
          <strong>2. Freelancer Skills & Experiences</strong>
        </li>
        <li>
          <strong>3. Recent Completed Projects and Reviews</strong>
        </li>
        <li>
          <strong>4. Portfolios</strong>
        </li>
      </ul>
      <div className="flex">
        <div className="image mr-4" style={{ maxWidth: '350px' }}>
          <ModalImage small={FreelancerDetailsImg} large={FreelancerDetailsImg} alt="FreelancerDetailsImg" />
        </div>
      </div>
    </div>
  );
};

export default FreelancerDetails;
