import React from 'react';
import ModalImage from 'react-modal-image';

import fBP from '../../assets/images/browse-freelancer.png';
import bySkill from '../../assets/images/bf-language.png';
import byCategory from '../../assets/images/bf-cat.png';
import byCountry from '../../assets/images/bf-country.png';

const BrowseFreelancers = () => {
  return (
    <div className="content">
      <h1>Browse Freelancer</h1>

      <ul>
        <li>
          <p>
            Here you can find the freelancers available and matched your required criteria. These projects are being shown based on your category.
            That means only those freelancers will show up here which has your matching profile category. You can filter the freelancers list using
            category, skill, country, working languages and keywords. Clicking on the title of the freelancers item will show you the freelancer's
            profile.
          </p>
          <div className="flex">
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={fBP} large={fBP} alt="fBP" />
            </div>
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={byCategory} large={byCategory} alt="byCategory" />
            </div>
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={bySkill} large={bySkill} alt="bySkill" />
            </div>
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={byCountry} large={byCountry} alt="byCountry" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BrowseFreelancers;
