import React from 'react';
import ModalImage from 'react-modal-image';

import NS from '../../assets/images/emp-notifications.png';

const EmpNotifications = () => {
  return (
    <div className="content">
      <h1>Notification Settings</h1>

      <ul>
        <li>
          <strong>1. Enable Notification:</strong> Toggling this switch will turn on or off your email notifications.
        </li>
        <li>
          <strong>2. Notification Frequency:</strong> This is where you'll be able to set up how frequently we want to get the notifications. You can
          receive notifications Daily, Weekly, Fortnightly, Monthly.
        </li>
        <li>
          <strong>3. Freelancer Profile Per Notification:</strong> Lets say you have 30 freelancer matched with your category and you want to receive
          only 10 projects per day. You can enter 10 here and save. The platform will randomly select 10 out of 30 and send them your email.
        </li>
        <li>
          <strong>4. Select Category:</strong> This is where you'll decide which category's freelancer you want to receive. Just check the categories
          and click save. If you need a freelancer to have some must have skill under that category you can check the must have skill box and select
          some skills.
        </li>
      </ul>
      <p>
        <strong>Here's an example how this feature works:</strong>
      </p>
      <p>
        Lets say you work on <code>Web Development</code> and <code>Mobile & software</code> categories. You've set the notification frequency to
        weekly and you want to receive maximum 15 freelancer.
      </p>
      <p>
        The platform will start from the day you've enabled your notification settings and count collect the freelancer from those two categories.
        Lets say total 50 freelancers created account on those two categories. At the end of the week the platform will randomly select 15 freelancer
        profile from there and sent you through email.
      </p>
      <div className="flex">
        <div className="image mr-4" style={{ maxWidth: '350px' }}>
          <ModalImage small={NS} large={NS} alt="NS" />
        </div>
      </div>
    </div>
  );
};

export default EmpNotifications;
