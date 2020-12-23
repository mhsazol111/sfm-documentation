import React from 'react';
import ModalImage from 'react-modal-image';

import CronManager from '../assets/images/cron-manager.png';
import AcfProPage from '../assets/images/acf-pro-page.png';
import AcfProOptions from '../assets/images/acf-pro-options.png';
import AllInOne from '../assets/images/all-in-one.png';
import ClassicEditor from '../assets/images/classic-editor.png';
import Cf7_1 from '../assets/images/cf7.png';
import Cf7_2 from '../assets/images/cf7-1.png';
import Cf7_3 from '../assets/images/cf7-2.png';
import Cf7_4 from '../assets/images/cf7-3.png';
import TranslatePress from '../assets/images/translate-press.png';
import WPSmtp from '../assets/images/wp-smtp.png';
import WPSmtp_1 from '../assets/images/wp-smtp-1.png';

const Plugins = () => {
  return (
    <div className="content">
      <h1>Installed Plugins</h1>
      <ul>
        <li>
          <strong>Advanced Cron Manager</strong> (Activated)
          <p>This plugin is used to monitor schedule events. Example: Daily, Weekly user email notifications, etc. </p>
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={CronManager} large={CronManager} alt="CronManager" />
          </div>
        </li>

        <li>
          <strong>Advanced Custom Fields PRO</strong> (Activated)
          <p>
            This plugin is used to structure the whole website's layout. Page structure, additional settings field, theme-options fields, email
            settings field, etc are created with this plugin. This is one of the most important plugin for this website.
          </p>
          <div className="flex">
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={AcfProPage} large={AcfProPage} alt="AcfProPage" />
            </div>
            <div className="image" style={{ maxWidth: '350px' }}>
              <ModalImage small={AcfProOptions} large={AcfProOptions} alt="AcfProPage" />
            </div>
          </div>
        </li>

        <li>
          <strong>All-in-One WP Migration</strong> (Activated)
          <p>
            This is used to take a full backup or import/export the website safely. However, it needs at least one premium add-on for importing. We've
            already added "All-in-One WP Migration Unlimited Extension" with unlimited license activated.
          </p>
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={AllInOne} large={AllInOne} alt="AllInOne" />
          </div>
        </li>

        <li>
          <strong>Classic Editor</strong> (Activated)
          <p>
            This plugin allows us to disable Gutenburg block editor and instead give us back the familiar classic editor which is better for our need.
          </p>
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={ClassicEditor} large={ClassicEditor} alt="ClassicEditor" />
          </div>
        </li>

        <li>
          <strong>Contact Form 7</strong> (Activated)
          <p>
            This plugin is used to create contact forms and receive emails from client through the form. Here are some screenshots to show how to
            create or edit a contact form. Its pretty easy to follow the docs from{' '}
            <a href="https://contactform7.com/docs/" target="_blank" rel="noreferrer">
              here.
            </a>
          </p>
          <div className="flex">
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={Cf7_1} large={Cf7_1} alt="Cf7_1" />
            </div>
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={Cf7_2} large={Cf7_2} alt="Cf7_2" />
            </div>
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={Cf7_3} large={Cf7_3} alt="Cf7_3" />
            </div>
            <div className="image" style={{ maxWidth: '350px' }}>
              <ModalImage small={Cf7_4} large={Cf7_4} alt="Cf7_4" />
            </div>
          </div>
        </li>

        <li>
          <strong>Safe SVG</strong> (Activated)
          <p>This plugin is used to enable SVG uploads to WordPress media library and sanitizes the SVG before saving it.</p>
        </li>

        <li>
          <strong>TranslatePress - and the add-ons</strong> (Activated)
          <p>The plugins to translate the whole website. We'll have a whole section dedicated to show you how to translate the website.</p>
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={TranslatePress} large={TranslatePress} alt="TranslatePress" />
          </div>
        </li>

        <li>
          <strong>WP Mail SMTP</strong> (Activated)
          <p>This plugin manage the email settings. If you wanted to manage your custom email settings instead of PHP wp_mail().</p>
          <div className="flex">
            <div className="image mr-4" style={{ maxWidth: '350px' }}>
              <ModalImage small={WPSmtp_1} large={WPSmtp_1} alt="WPSmtp_1" />
            </div>
            <div className="image" style={{ maxWidth: '350px' }}>
              <ModalImage small={WPSmtp} large={WPSmtp} alt="WPSmtp" />
            </div>
          </div>
        </li>

        <li>
          <strong>User Switching</strong> (Activated)
          <p>This is for switching users quickly for developing purposes.</p>
        </li>
        <li>
          <strong>WP File Manager</strong> (Activated)
          <p>For quick file management without SFTP/FTP.</p>
        </li>
      </ul>
    </div>
  );
};

export default Plugins;
