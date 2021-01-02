import React from 'react';
import ModalImage from 'react-modal-image';

import DashboardMain from '../../assets/images/dashboard-main.png';

const Dashboard = () => {
  return (
    <div className="content">
      <h1>Dashboard First Look</h1>
      <p>Here is the first look of a freelancer dashboard.</p>

      <ul>
        <li>
          <strong>1. Navigation Area</strong>
        </li>
        <li>
          <strong>2. Quick count of your projects</strong>
          <p>
            <strong>Active Projects:</strong> Projects that you are currently working on. Projects that you've won through bidding or client
            invitation.
          </p>
          <p>
            <strong>Completed projects:</strong> These are the projects that you have been worked on and I completed and marked completed by the
            project employer
          </p>
          <p>
            <strong>Pending projects:</strong> These are the projects that you have submitted proposal but haven't received any confirmation about
            that from the project employer.
          </p>
          <p>
            <strong>Declined projects:</strong> these are the projects that the client declined or you couldn't completed them.
          </p>
        </li>
        <li>
          <strong>3. Navigation Area</strong>
          <p>Navigation area is used to browse through the whole site.</p>
        </li>
        <li>
          <strong>4. Latest messages</strong>
          <p>Here you'll find your latest 3 messages from the client.</p>
        </li>
        <li>
          <strong>5. Recent Proposals</strong>
          <p>These are the proposals you've sent to some projects</p>
        </li>
      </ul>
      <div className="flex">
        <div className="image mr-4" style={{ maxWidth: '350px' }}>
          <ModalImage small={DashboardMain} large={DashboardMain} alt="DashboardMain" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
