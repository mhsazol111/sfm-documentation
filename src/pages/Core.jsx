import React from 'react';
import ModalImage from 'react-modal-image';
import WordPress from '../assets/images/wordpress.png';

const Core = () => {
  return (
    <div className="content">
      <h1>Core Infrastructure</h1>
      <h3>Programming Languages:</h3>
      <ul>
        <li>
          <strong>Front-end:</strong> HTML, CSS, JavaScript, jQuery, Backbone JS
        </li>
        <li>
          <strong>Server-side:</strong> PHP
        </li>
      </ul>
      <h3>Framework: WordPress</h3>
      <p>
        We've used WordPress for the website's framework. WordPress is the most popular and versatile CMS (Content Management System) found on the
        web.
      </p>
      <ul>
        <li>
          <strong>A little about WordPress:</strong> WordPress began in 2003 when Mike Little and Matt Mullenweg forked a little-known blogging tool
          known as B2/cafelog. Little and Mullenweg sought to create a better blogging platform, built on the original B2 code base, but with more
          robust features and more consistent development. The result is WordPress. First a tool for blogging, WordPress quickly grew to be an
          extensive content management system (CMS) able to handle a variety of websites.
        </li>
        <li>
          <strong>WordPress Usage Statistics Across the Web: </strong>
          According to usage statistics of content management systems now report that WordPress powers over 60 million websites, or 36% of all
          websites on the internet and over 60% of all websites whose content management systems are known.
        </li>
      </ul>

      <div className="image" style={{ maxWidth: '300px' }}>
        <ModalImage small={WordPress} large={WordPress} alt="WordPress" />
      </div>
    </div>
  );
};

export default Core;
