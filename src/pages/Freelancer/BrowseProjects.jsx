import React from 'react';
import ModalImage from 'react-modal-image';

import fBP from '../../assets/images/browse-projects.png';
import bySkill from '../../assets/images/by-skill.png';
import byCategory from '../../assets/images/by-category.png';
import byCountry from '../../assets/images/by-country.png';

const FreelancerBrowseProjects = () => {
  return (
    <div className="content">
      <h1>Browse Projects</h1>

      <ul>
        <li>
          <p>
            Here you can find your eligible projects. These projects are being shown based on your category and skill. That means only those projects
            will show up here which has your matching profile category or skill. You can filter the project list using category, skill, country and
            keywords. Clicking on the title of the project item will show you the project details page.
          </p>
          <div className="flex">
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={fBP} large={fBP} alt="fBP" />
            </div>
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={bySkill} large={bySkill} alt="bySkill" />
            </div>
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={byCategory} large={byCategory} alt="byCategory" />
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

export default FreelancerBrowseProjects;
