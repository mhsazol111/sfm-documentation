import React from 'react';
import ModalImage from 'react-modal-image';

import EmpSign from '../../assets/images/emp-signup.png';
import EmpSignForm from '../../assets/images/emp-signup-form.png';

const EmpSignUp = () => {
  return (
    <div className="content">
      <h1>Sign Up as Employer</h1>

      <ul>
        <li>
          <p>
            In order to become a company/employer you have to sign up as a company by visiting{' '}
            <a href="https://www.switzerland-freelance.ch/register/?role=employer" target="_blank" rel="noreferrer">
              here
            </a>{' '}
            or visit the website, go to "Sign Up" and then select the "Sign Up" button.
          </p>
          <p>Enter all the fields and Finish Signing Up.</p>
          <div className="flex">
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={EmpSign} large={EmpSign} alt="EmpSign" />
            </div>
            <div className="image" style={{ maxWidth: '350px' }}>
              <ModalImage small={EmpSignForm} large={EmpSignForm} alt="EmpSignForm" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EmpSignUp;
