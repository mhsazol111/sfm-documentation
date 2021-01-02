import React from 'react';
import ModalImage from 'react-modal-image';

import NS from '../../assets/images/notification-settings.png';

const Notifications = () => {
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
          <strong>3. Projects Per Notification:</strong> Lets say you have 30 projects matched with your category and you want to receive only 10
          projects per day. You can enter 10 here and save. The platform will randomly select 10 out of 30 and send them your email.
        </li>
        <li>
          <strong>4. Select Category:</strong> This is where you'll decide which category's projects you want to receive. Just check the categories
          and click save.
        </li>
      </ul>
      <p>
        <strong>Here's an example how this feature works:</strong>
      </p>
      <p>
        Lets say you work on <code>Web Development</code> and <code>Mobile & software</code> categories. You've set the notification frequency to
        weekly and you want to receive maximum 15 projects.
      </p>
      <p>
        The platform will start from the day you've enabled your notification settings and count collect the projects from those two categories. Lets
        say total 50 projects was posted on those two categories. At the end of the week the platform will randomly select 15 projects from there and
        sent you through email.
      </p>
      <div className="flex">
        <div className="image mr-4" style={{ maxWidth: '350px' }}>
          <ModalImage small={NS} large={NS} alt="NS" />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
