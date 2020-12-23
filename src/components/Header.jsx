import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <div id="main-header" className="bg-blue-100 lg:pt-4 lg:pb-4 pt-1 pb-1">
      <div className="container">
        <div className="row flex">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="SFM" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
