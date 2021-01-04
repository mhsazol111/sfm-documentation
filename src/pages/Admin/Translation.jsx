import React from 'react';
import ModalImage from 'react-modal-image';

import TP1 from '../../assets/images/tp-1.png';
import TP2 from '../../assets/images/tp-2.png';
import TP3 from '../../assets/images/tp-3.png';
import TP4 from '../../assets/images/tp-4.png';
import TP5 from '../../assets/images/tp-5.png';

const Translation = () => {
  return (
    <div className="content">
      <h1>Managing the translation</h1>
      <p>Here's how you can translate the pages.</p>

      <ul>
        <li>
          There are two kinds of translations:
          <ul>
            <li>
              <strong>1. Static Pages / Posts translations. Ex: Home page, Register Page, etc..</strong>
              <p>Here's how to translate these pages:</p>
              <ul>
                <li>
                  First make sure you are logged in as an administrator. Then visit the page you want to translate. Click on the top of the "Translate
                  Page" button.
                  <div className="image mr-4" style={{ maxWidth: '350px' }}>
                    <ModalImage small={TP1} large={TP1} alt="TP1" />
                  </div>
                </li>
                <li>
                  It'll take you to a page with a visual translation editor feature. Like this:
                  <div className="image mr-4" style={{ maxWidth: '350px' }}>
                    <ModalImage small={TP2} large={TP2} alt="TP2" />
                  </div>
                  Hover over any of the text and the text will be highlighted. Once you hover there will be an edit icon (pencil mark) clicking on
                  that will bring the text on the left sidebar as marked on the screenshot. Enter your translated string in the field and click on the
                  "Save Translation" button on very top of the left sidebar will save the translation.
                </li>
                <li>
                  However if you can't find any text visible in the page but they appear some other time based on some condition you can search for
                  the string from the left side and translate that. This is the best way to translate anything. We always recommend this way.
                  <div className="image mr-4" style={{ maxWidth: '350px' }}>
                    <ModalImage small={TP3} large={TP3} alt="TP3" />
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <strong>
                2. Dynamic contents and user authenticated translation. Ex: All pages inside dashboard, submit a project, send a proposal, etc..
              </strong>
              <p>Here's how to translate these pages:</p>
              <ul>
                <li>
                  If you are intended to translate any page that are specific to Freelancer or Employer. First thing you need to do is change the view
                  as from the left side.
                  <div className="image mr-4" style={{ maxWidth: '350px' }}>
                    <ModalImage small={TP4} large={TP4} alt="TP4" />
                  </div>
                </li>
                <li>
                  Once you do that your entire dashboard will look like that specific your (here we've selected freelancer).
                  <div className="image mr-4" style={{ maxWidth: '350px' }}>
                    <ModalImage small={TP5} large={TP5} alt="TP5" />
                  </div>
                </li>
                <li>
                  The rest of the process is same as static. Hover over any text, click on the edit icon, insert the translation and save on the "Save
                  translation" button.
                </li>
                <li>
                  <strong>Note: </strong>Most of the digits, names, and user inserted texts will be a placeholder here. Your goal is to only translate
                  those texts that are provided by the website.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Translation;
