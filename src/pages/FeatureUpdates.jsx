import React from 'react';
import { Link } from 'react-router-dom';

const FeatureUpdates = () => {
  return (
    <div className="content">
      <h1>Feature Updates</h1>

      <p>
        <strong>Codebase (Github):</strong>{' '}
        <a href="https://github.com/mhsazol111/sfm-freelance-engine.git" target="_blank" rel="noreferrer">
          https://github.com/mhsazol111/sfm-freelance-engine.git
        </a>
      </p>
      <p>Please send us an email and we'll grant the permission to access the repository.</p>
      <p>We try to keep all the code changes inside the child theme. Directory is: site_root/wp-contents/themes/sfm-child</p>
      <p>
        Its hard to show the changes on the files because we are simultaneously changing and updating the codes on every update. So the line number or
        code line won't match. The best way to figure out the changes are to checkout to specific commit then look at the changed files and replace
        the files. We'll try to identify the file and mark those here.
      </p>

      <ul>
        <li>
          <Link to="/feature-updates/december">December</Link>
        </li>
      </ul>
    </div>
  );
};

export default FeatureUpdates;
