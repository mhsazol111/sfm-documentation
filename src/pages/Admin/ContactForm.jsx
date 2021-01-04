import React from 'react';
import ModalImage from 'react-modal-image';

import CF1 from '../../assets/images/Contact_all_contact.png';
import CF2 from '../../assets/images/Contact_Input_contact.png';
import CF3 from '../../assets/images/Contact_add_new_contact.png';
import CF4 from '../../assets/images/Contact_delete_contact.png';
import CF5 from '../../assets/images/Contact_add_new_field.png';

const ContactForms = () => {
  return (
    <div className="content">
      <h1>Manage Contact Forms</h1>

      <ul>
        <li>
          Visit Admin Dashboard {'->'} Contact {'->'} Contact forms. You can find it by clicking{' '}
          <a href="http://switzerland-freelance.ch/wp-admin/admin.php?page=wpcf7" target="_blank" rel="noreferrer">
            here
          </a>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={CF1} large={CF1} alt="CF1" />
          </div>
        </li>
        <li>Contact: Here is shown all the existing forms that added to the website.</li>
        <li>Edit: You can edit a form by clicking “Edit”.</li>
        <li>Duplicate: You can duplicate a form by clicking “Duplicate”.</li>
        <li>
          Shortcode: To show a form in a page or post, copy the form shortcode and put into the page or post.
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={CF3} large={CF3} alt="CF3" />
          </div>
        </li>
        <li>
          Delete: To delete a form select the form first (1), then select the “Delete” from dropdown list (2) and then click “Apply” (3).
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={CF4} large={CF4} alt="CF4" />
          </div>
        </li>
        <li>
          <p>Add new: You can add a new form by clicking “Add New”.</p>
          <p>Title: Here you add the form name.</p>
          <p>
            Default input: This code comes by default when you add a new form. You can remove this code and added new input field that you want to
            show
          </p>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={CF2} large={CF2} alt="CF2" />
          </div>
        </li>
        <li>
          <p>Input field: Those are existing input fields to use.</p>
          <p>Input: Clink an input field that you want to add to the form. Example(text).</p>
          <p>Required: If the input fields are required fields then check the “Field type”.</p>
          <p>Name: Add the input field name here.</p>
          <p>Value: Add the input value here.</p>
          <p>Placeholder: If you check the placeholder then the value will show as a placeholder on the input field. </p>
          <p>Input id: You can give an id to the input field.</p>
          <p>Input class: You can give a class name to the input field.</p>
          <p>Insert: To add the input field to the form click “Insert”.</p>
          <div className="image mr-4" style={{ maxWidth: '350px' }}>
            <ModalImage small={CF5} large={CF5} alt="CF5" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactForms;
