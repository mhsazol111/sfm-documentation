import React from 'react';
import ModalImage from 'react-modal-image';
import FreelanceEngine from '../assets/images/freelance-engine.png';
import SFMChild from '../assets/images/sfm-child.png';
import TwentyTwenty from '../assets/images/twenty-twenty.png';

const Themes = () => {
  return (
    <div className="content">
      <h1>Themes</h1>
      <ul>
        <li>
          <strong>Primary:</strong> Freelance Engine (By EngineThemes Team)
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={FreelanceEngine} large={FreelanceEngine} alt="FreelanceEngine" />
          </div>
        </li>
        <li>
          <strong>Child Theme</strong> (Activated): SFM (By iExperto)
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={SFMChild} large={SFMChild} alt="SFMChild" />
          </div>
        </li>
        <li>
          <strong>Fallback Theme:</strong> Twenty Twenty (By the WordPress team)
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={TwentyTwenty} large={TwentyTwenty} alt="TwentyTwenty" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Themes;
