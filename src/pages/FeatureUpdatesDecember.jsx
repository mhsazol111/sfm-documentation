import React from 'react';
import ModalImage from 'react-modal-image';

import FreelancerNatField from '../assets/images/Freelancer-Nationality-Field.png';
import FreelancerDailyWage from '../assets/images/Freelancer-Daily-wage-field-update.png';
import AdminSelectingUser from '../assets/images/Admin-send-custom-email-to-multiple-users-(selecting-users).png';
import AdminWritingUser from '../assets/images/Admin-send-custom-email-to-multiple-users-(writing-email).png';

import NotificationSettings_1 from '../assets/images/Notification-settings-1.png';
import NotificationSettings_2 from '../assets/images/Notification-settings-2.png';
import NotificationSettings_3 from '../assets/images/Notification-settings-3.png';
import NotificationSettings_4 from '../assets/images/Notification-settings-4.png';
import NotificationSettings_5 from '../assets/images/Notification-settings-5.png';
import NotificationSettings_6 from '../assets/images/Notification-settings-6.png';
import NotificationSettings_7 from '../assets/images/Notification-settings-7.png';

const FeatureUpdatesDecember = () => {
  return (
    <div className="content">
      <h1>December Updates</h1>

      <ul>
        <li>
          <strong>Freelancer nationality field</strong>
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={FreelancerNatField} large={FreelancerNatField} alt="FreelancerNatField" />
          </div>
          <ul>
            <li>
              <p>
                <strong>Git Commit: </strong>
                <a
                  href="https://github.com/mhsazol111/sfm-freelance-engine/commit/060322ba550405643350fa6356bb13916b9dd0fa"
                  target="_blank"
                  rel="noreferrer"
                >
                  Adding Nationality field
                </a>
              </p>
              <p>
                <code>site_root/wp-contents/themes/sfm-child/Helpers/Freelancer.php</code>
              </p>
              <p>
                <code>site_root/wp-contents/themes/sfm-child/assets/css/dashboard.css</code>
              </p>
              <p>
                <code>site_root/wp-contents/themes/sfm-child/template-parts/profile-edit-form-freelancer.php</code>
              </p>
              <p>
                <code>site_root/wp-contents/themes/sfm-child/translations/edit-profile-freelancer.php</code>
              </p>
            </li>
          </ul>
        </li>

        <li>
          <strong>Freelancer daily wage "To be agreed" added</strong>
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={FreelancerDailyWage} large={FreelancerDailyWage} alt="FreelancerDailyWage" />
          </div>
          <ul>
            <li>
              <p>
                <strong>Git Commit: </strong>
                <a
                  href="https://github.com/mhsazol111/sfm-freelance-engine/commit/fc1dca266a8e409058397da4143d157dbe483a09"
                  target="_blank"
                  rel="noreferrer"
                >
                  Daily wage field update. Added a dropdown for "To be agreed".
                </a>
              </p>
              <p>
                <code>site_root/wp-contents/themes/sfm-child/author.php</code>
              </p>
              <p>
                <code>site_root/wp-contents/themes/sfm-child/assets/css/dashboard.css</code>
              </p>
              <p>
                <code>site_root/wp-contents/themes/sfm-child/template-parts/profile-edit-form-freelancer.php</code>
              </p>
              <p>
                <code>site_root/wp-contents/themes/sfm-child/template-parts/components/browse-freelancer-item.php</code>
              </p>
            </li>
          </ul>
        </li>

        <li>
          <strong>Multiple email to user feature added</strong>
          <div className="flex">
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={AdminSelectingUser} large={AdminSelectingUser} alt="AdminSelectingUser" />
            </div>
            <div className="image" style={{ maxWidth: '350px' }}>
              <ModalImage small={AdminWritingUser} large={AdminWritingUser} alt="AdminWritingUser" />
            </div>
          </div>
          <ul>
            <li>
              <p>
                <strong>Git Commit: </strong>
                <a
                  href="https://github.com/mhsazol111/sfm-freelance-engine/commit/f7046dce7cf2f623198107c59c5bb991480eb579"
                  target="_blank"
                  rel="noreferrer"
                >
                  Multiple email to user feature added.
                </a>
              </p>
              <p>
                <code>site_root/wp-contents/themes/sfm-child/functions.php</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/assets/admin/users/email-script.js</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/assets/admin/users/email-style.css</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/Helpers/Send_Email_To_Users.php</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/template-parts/admin/users/email-popup.php</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/template-parts/admin/users/table-header.php</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/template-parts/admin/users/table-item.php</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/template-parts/admin/users/table-search.php</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/template-parts/admin/users/user-email-page.php</code>
              </p>
            </li>
          </ul>
        </li>

        <li>
          <strong>User Email notification feature added.</strong>
          <div className="flex">
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={NotificationSettings_1} large={NotificationSettings_1} alt="NotificationSettings_1" />
            </div>
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={NotificationSettings_2} large={NotificationSettings_2} alt="NotificationSettings_2" />
            </div>
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={NotificationSettings_3} large={NotificationSettings_3} alt="NotificationSettings_3" />
            </div>
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={NotificationSettings_4} large={NotificationSettings_4} alt="NotificationSettings_4" />
            </div>
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={NotificationSettings_5} large={NotificationSettings_5} alt="NotificationSettings_5" />
            </div>
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={NotificationSettings_6} large={NotificationSettings_6} alt="NotificationSettings_6" />
            </div>
            <div className="image" style={{ maxWidth: '350px' }}>
              <ModalImage small={NotificationSettings_7} large={NotificationSettings_7} alt="NotificationSettings_7" />
            </div>
          </div>

          <ul>
            <li>
              <p>
                <strong>Git Commit: </strong>
                <a
                  href="https://github.com/mhsazol111/sfm-freelance-engine/commit/65dce9ad1abfb092072e361b2b867d9685b7b3d1"
                  target="_blank"
                  rel="noreferrer"
                >
                  User Email notification feature added
                </a>
              </p>

              <p>
                <code>site_root/wp-content/themes/sfm-child/functions.php</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/page-notification-settings.php</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/acf-json/group_5fb2aa8fd3e97.json</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/assets/css/dashboard.css</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/assets/js/sfm-ajax-scripts.js</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/Helpers/Email_Notification.php</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/Helpers/User_Notification.php</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/template-parts/nav-profile.php</code>
              </p>
              <p>
                <code>site_root/wp-content/themes/sfm-child/template-parts/notification-settings-form.php</code>
              </p>
            </li>
          </ul>
        </li>

        <li>
          <strong>Freelancer nationality field</strong>
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={FreelancerNatField} large={FreelancerNatField} alt="FreelancerNatField" />
          </div>
          <ul>
            <li>
              <p>
                <strong>Git Commit: </strong>
                <a
                  href="https://github.com/mhsazol111/sfm-freelance-engine/commit/060322ba550405643350fa6356bb13916b9dd0fa"
                  target="_blank"
                  rel="noreferrer"
                >
                  Adding Nationality field
                </a>
              </p>
              <p>
                <code>site_root/wp-contents/themes/sfm-child/Helpers/Freelancer.php</code>
              </p>
              <p>
                <code>site_root/wp-contents/themes/sfm-child/assets/css/dashboard.css</code>
              </p>
              <p>
                <code>site_root/wp-contents/themes/sfm-child/template-parts/profile-edit-form-freelancer.php</code>
              </p>
              <p>
                <code>site_root/wp-contents/themes/sfm-child/translations/edit-profile-freelancer.php</code>
              </p>
            </li>
          </ul>
        </li>

        <li>
          <strong>Safest Way</strong>
          <p>
            If you haven't touched any of the theme files in the production server, the best way to update is just create a zip of "sfm-child"
            directory and then just replace the whole theme from the git repository.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FeatureUpdatesDecember;
