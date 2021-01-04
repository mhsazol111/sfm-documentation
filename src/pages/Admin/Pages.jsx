import React from 'react';
import ModalImage from 'react-modal-image';

import PrivateMessage from '../../assets/images/Pages_All_Pages.png';
import addNew from '../../assets/images/add-new-page.png';

const ManagePages = () => {
  return (
    <div className="content">
      <h1>Manage Pages</h1>

      <ul>
        <li>
          Visit Admin Dashboard {'->'} Page. You can find it by clicking{' '}
          <a href="http://switzerland-freelance.ch/wp-admin/edit.php?post_type=page" target="_blank" rel="noreferrer">
            here
          </a>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={PrivateMessage} large={PrivateMessage} alt="PrivateMessage" />
          </div>
        </li>
        <li>Pages: You can see all the pages here that are added to the website.</li>
        <li>Edit: You can edit a page by clicking “Edit”.</li>
        <li>Trash: You can Delete a page by clicking “Trash”.</li>
        <li>View: You can view a page by clicking “View”.</li>
        <li>
          You can add a new page by clicking on the add new button button. Then insert the title of the page, put the contents you want. Set a
          featured image and click on the publish button. Thats it this page is ready to go public.
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={addNew} large={addNew} alt="addNew" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ManagePages;
