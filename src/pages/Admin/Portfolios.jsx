import React from 'react';
import ModalImage from 'react-modal-image';

import PrivateMessage from '../../assets/images/Portfolios_portfolio_all.png';

const FreePortfolios = () => {
  return (
    <div className="content">
      <h1>Portfolio</h1>
      <p>From here admin can monitor the freelancer's own .</p>

      <ul>
        <li>
          Visit Admin Dashboard {'->'} Portfolio. You can find it by clicking{' '}
          <a href="http://switzerland-freelance.ch/wp-admin/edit.php?post_type=portfolio" target="_blank" rel="noreferrer">
            here
          </a>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={PrivateMessage} large={PrivateMessage} alt="PrivateMessage" />
          </div>
        </li>
        <li>Portfolio: Here you can find all the freelancer portfolios that those freelancers are added to their profile.</li>
        <li>Trash: Delete or move to trash a freelancer portfolio by clicking “Trash”.</li>
        <li>Author: Here you see the freelancer name who added the portfolio to their profile.</li>
        <li>Skill: All the skills of a freelancer shows here.</li>
      </ul>
    </div>
  );
};

export default FreePortfolios;
