import React from 'react';
import ModalImage from 'react-modal-image';

import FreelancerHeader from '../../assets/images/freelancer-dashboard-header.png';
import FreelancerProfile from '../../assets/images/emp-update-profile.png';
import FreelancerCategory from '../../assets/images/freelancer-category.png';

const EmpUpdateProfile = () => {
  return (
    <div className="content">
      <h1>Employer Updating profile</h1>

      <ul>
        <li>
          <p>
            Once your account is approved and you've received the confirmation email from the website now its time to update your profile. Visit your
            account dashboard from the top-left of the website header. Once you're there you'll be automatically redirected to update your profile or
            you can manually visit from <a href="https://www.switzerland-freelance.ch/edit-profile">here</a>.
          </p>
          <p>You've to update the necessary field and make sure every information is valid and true.</p>
          <div className="flex">
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={FreelancerHeader} large={FreelancerHeader} alt="FreelancerHeader" />
            </div>
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={FreelancerProfile} large={FreelancerProfile} alt="FreelancerProfile" />
            </div>
          </div>
          <ul>
            <li>
              Project Categories selection:
              <p>
                You need to select the categories you want to post your project. There are total 14 categories to select from. Please, make sure to
                select only those categories your project is related to. Just a note: admins will review your profile again after profile update. If
                they think your profile categories are not relevant they might hold your profile.
              </p>
              <div className="image mr-4" style={{ maxWidth: '350px' }}>
                <ModalImage small={FreelancerCategory} large={FreelancerCategory} alt="FreelancerCategory" />
              </div>
            </li>

            <li>Once you've updated the profile you can access everything.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default EmpUpdateProfile;
