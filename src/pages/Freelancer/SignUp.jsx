import React from 'react';
import ModalImage from 'react-modal-image';

import FreelancerSignUp from '../../assets/images/freelancer-signup.png';
import FreelancerSignUpForm from '../../assets/images/freelancer-signup-form.png';

const FreeLancerSignUp = () => {
  return (
    <div className="content">
      <h1>Sign Up as Freelancer</h1>

      <ul>
        <li>
          <p>
            In order to become a freelancer you have to sign up for a freelancer account by visiting{' '}
            <a href="https://www.switzerland-freelance.ch/register/?role=freelancer" target="_blank" rel="noreferrer">
              here
            </a>{' '}
            or visit the website, go to "Sign Up" and then select the "Sign Up" button.
          </p>
          <p>Enter all the fields and Finish Signing Up.</p>
          <div className="flex">
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={FreelancerSignUp} large={FreelancerSignUp} alt="FreelancerSignUp" />
            </div>
            <div className="image" style={{ maxWidth: '350px' }}>
              <ModalImage small={FreelancerSignUpForm} large={FreelancerSignUpForm} alt="FreelancerSignUpForm" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FreeLancerSignUp;
