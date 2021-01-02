import React from 'react';
import ModalImage from 'react-modal-image';

import MyProjectsImg from '../../assets/images/add-portfolio.png';
import Messages from '../../assets/images/messages.png';

const Portfolio = () => {
  return (
    <div className="content">
      <h1>Portfolios & Messages</h1>

      <ul>
        <li>
          You can add portfolios to your own account. They will be visible on your profile when any employer visits your profile.
          <div className="flex">
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={MyProjectsImg} large={MyProjectsImg} alt="MyProjectsImg" />
            </div>
          </div>
        </li>
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

export default Portfolio;
