import React from 'react';
import ModalImage from 'react-modal-image';

import FreelancerHeader from '../../assets/images/freelancer-dashboard-header.png';
import FreelancerProfile from '../../assets/images/freelancer-update-profile.png';
import FreelancerLanguage from '../../assets/images/freelancer-language.png';
import FreelancerCategory from '../../assets/images/freelancer-category.png';
import FreelancerSkill from '../../assets/images/freelancer-skills.png';

const FreelancerUpdateProfile = () => {
  return (
    <div className="content">
      <h1>Freelancer Updating profile</h1>

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
              Select your working Languages:
              <p>
                This is really necessary to get rewarded a project. If you are capable of working in "English and French" both languages you'll be
                able to send proposals to the projects which requires freelancers to have either "English or French" and "English and French" both. So
                basically its a key requirement to get projects and get invited to project.
              </p>
              <div className="image mr-4" style={{ maxWidth: '350px' }}>
                <ModalImage small={FreelancerLanguage} large={FreelancerLanguage} alt="FreelancerLanguage" />
              </div>
            </li>

            <li>
              Project Categories selection:
              <p>
                You need to select the categories you can work on. There are total 14 categories to select from. Please, make sure to select only
                those categories you're expert. You are allowed to select maximum of 3 categories. Just a note: admins will review your profile again
                after profile update. If they think your profile categories are not relevant they might hold your profile.
              </p>
              <div className="image mr-4" style={{ maxWidth: '350px' }}>
                <ModalImage small={FreelancerCategory} large={FreelancerCategory} alt="FreelancerCategory" />
              </div>
            </li>

            <li>
              Specific skill:
              <p>
                Here you can select your skills you are expert on. Make sure to select only skills relate to your expertise. Just a note: admins will
                review your profile again after profile update. If they think your profile skills are not relevant they might hold your profile.
              </p>
              <div className="image mr-4" style={{ maxWidth: '350px' }}>
                <ModalImage small={FreelancerSkill} large={FreelancerSkill} alt="FreelancerSkill" />
              </div>
            </li>

            <li>Once you've updated the profile you can access everything.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default FreelancerUpdateProfile;
