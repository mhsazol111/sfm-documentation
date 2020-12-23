import React from 'react';
import ModalImage from 'react-modal-image';

import WpCoreFiles from '../assets/images/wp-core-files.png';
import PluginFiles from '../assets/images/plugin-files.png';
import ThemeFiles from '../assets/images/theme-files.png';
import UploadedFiles from '../assets/images/uploaded-files.png';

const FileStructure = () => {
  return (
    <div className="content">
      <h1>File Structure</h1>
      <ul>
        <li>
          <strong>WordPress Core Files</strong>
          <p>
            These are the core files of WordPress and we shouldn't touch them, accept wp-config.php. They will be replaced every time WordPress
            updates or reinstalled.
          </p>
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={WpCoreFiles} large={WpCoreFiles} alt="WpCoreFiles" />
          </div>
        </li>

        <li>
          <strong>Plugin Files</strong>
          <p>
            All of your installed plugins will be here. You can manually extract a plugin here and install it from the dashboard if needed. Also you
            can delete/rename the plugin directory if you need to debug some kind of issue.
          </p>
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={PluginFiles} large={PluginFiles} alt="PluginFiles" />
          </div>
        </li>

        <li>
          <strong>Theme Files</strong>
          <p>This is where your themes live. The rules are same in case of debugging and cleaning up.</p>
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={ThemeFiles} large={ThemeFiles} alt="ThemeFiles" />
          </div>
        </li>

        <li>
          <strong>Upload Files</strong>
          <p>Once you use your "Media Library" to upload any kind of files they are being saved here based on the date directory structure.</p>
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={UploadedFiles} large={UploadedFiles} alt="UploadedFiles" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FileStructure;
