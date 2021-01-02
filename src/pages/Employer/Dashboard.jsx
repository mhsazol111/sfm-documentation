import React from 'react';
import ModalImage from 'react-modal-image';

import DashboardMain from '../../assets/images/emp-dashboard.png';

const EmpDashboard = () => {
  return (
    <div className="content">
      <h1>Dashboard First Look</h1>
      <p>Here is the first look of an employer dashboard.</p>

      <ul>
        <li>
          <strong>1. Navigation Area</strong>
        </li>
        <li>
          <strong>2. Quick count of your projects</strong>
          <p>
            <strong>Posted Projects:</strong> All the projects you've posted.
          </p>
          <p>
            <strong>Completed Projects:</strong> These are the projects that you have posted and a freelancer worked on that and completed that.
          </p>
          <p>
            <strong>Ongoing Projects:</strong> These are the projects you've posted and someone is currently working on it.
          </p>
          <p>
            <strong>Pending Projects:</strong> These are the projects that the you've posted but haven't assigned to anyone.
          </p>
          <p>
            <strong>Cancelled Projects:</strong> These are the projects someone started working and got cancelled for some reason.
          </p>
        </li>
        <li>
          <strong>3. Navigation Area</strong>
          <p>Navigation area is used to browse through the whole site.</p>
        </li>
        <li>
          <strong>4. Latest messages</strong>
          <p>Here you'll find your latest 3 messages from the freelancers.</p>
        </li>
        <li>
          <strong>5. Recent Proposals</strong>
          <p>These are the proposals you've received from the freelancers to your projects</p>
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

export default EmpDashboard;
