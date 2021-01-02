import React from 'react';
import ModalImage from 'react-modal-image';

import NS from '../../assets/images/submit-proposal.png';

const FrSubmitProposal = () => {
  return (
    <div className="content">
      <h1>Submit Proposal</h1>
      <p>
        You can submit proposal by clicking on the submit proposal button, fill the necessary information and submit the form. As soon as you submit
        the form the employer of the project will get a notification about the proposal.
      </p>
      <div className="flex">
        <div className="image mr-4" style={{ maxWidth: '350px' }}>
          <ModalImage small={NS} large={NS} alt="NS" />
        </div>
      </div>
    </div>
  );
};

export default FrSubmitProposal;
