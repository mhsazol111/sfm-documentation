import React from 'react';
import ModalImage from 'react-modal-image';

import WpCoreTables from '../assets/images/wp-core-tables.png';
import WpDBStructure from '../assets/images/Wordpress_database_structure.png';
import WpAdditionalDB from '../assets/images/additional-tables.png';

const DatabaseStructure = () => {
  return (
    <div className="content">
      <h1>Database Structure</h1>
      <ul>
        <li>
          <strong>WordPress Default Tables</strong>
          <p>
            These tables were created once we've installed the clean WordPress. Other tables are created on demand. Sometime managed WordPress hosting
            modify the table name or table name prefix. Note: Other tables in a WordPress database are created by other plugins and are not
            necessarily needed to run successfully the website.
          </p>
          <div className="image" style={{ maxWidth: '350px' }}>
            <ModalImage small={WpCoreTables} large={WpCoreTables} alt="WpCoreFiles" />
          </div>
          <ul>
            <li>
              <strong>wp_options</strong>
              <p>
                The table <code>wp_options</code> is one of the most important WordPress database table and stores all the settings of a WordPress
                site like the URL, the title, installed plugins, etc. Most of the plugins store settings in this table as well. All the settings that
                you see in the WordPress dashboard are stored in this table.
              </p>
            </li>
            <li>
              <strong>wp_users, wp_usermeta</strong>
              <p>
                <code>wp_users</code> stores all the registered users on a WordPress site. It contains basic information of a user like a username and
                encrypted password, email, time of registration, display name, status, and a few more fields.
              </p>
              <p>
                <code>wp_usermeta</code> stores the metadata (‘additional data‘) of the users. It extends the table wp_users with more data. For
                example, the first name of a user is stored in the table <code>wp_usermeta</code> instead of the table wp_users.
              </p>
              <p>
                There are two important fields in this table. Plugins can store custom data in <code>wp_usermeta</code> by just adding new{' '}
                <code>meta_key</code>
                values.
              </p>
            </li>
            <li>
              <strong>wp_posts, wp_postmeta</strong>
              <p>
                <code>wp_posts</code> table stores all content related data of a WordPress website. All posts, pages, their revisions are available in
                the <code>wp_posts</code> table. It might be confusing but WordPress stores much more into that table.
              </p>
              <p>
                In <code>wp_posts</code> is a table column <code>post_type</code> which segments that kind of different data so that specific types of
                data can be requested by a database query. <code>post_type</code> is the most important column in this table.
              </p>
              <p>
                For example: In SFM we're saving <strong>'Projects', 'Bids', 'Notification', 'Profiles'</strong>, etc in the <code>wp_posts</code>{' '}
                table as well.
              </p>
            </li>
            <li>
              <strong>wp_terms, wp_term_relationships, wp_term_taxonomy</strong>
              <p>
                The table <code>wp_terms</code> stores Categories and tags for posts, pages, and links.
              </p>
              <p>
                One of the columns in this table is ‘slug ‘. A slug is a term that reflects a tag of a particular post. In WordPress, you can use tags
                to connect posts, pages, and links between each other.
              </p>
              <p>
                <code>wp_term_relationship</code> is the conjunction and connects these tags to posts, pages, and links. It’s like a map between the
                terms objects and the terms.
              </p>
              <p>
                <code>wp_term_taxonomy</code> extends the table <code>wp_terms</code> with more data. It’s like metadata for the table{' '}
                <code>wp_terms</code> with the difference that plugins cannot add custom data here. This table also contains a relation between menus
                and menu items.
              </p>
              <p>
                In our case we've saved all our <strong>'Project Categories', 'Skills', 'Countries' 'Freelancer preferred languages'</strong> on the{' '}
                <code>wp_terms</code> table.
              </p>
            </li>
            <li>
              <strong>wp_comments, wp_commentmeta</strong>
              <p>
                <code>wp_comments</code> stores comments on posts and pages. This table also contains unapproved comments and author information
                together with the hierarchy of comments. The table <code>wp_commentmeta</code> contains further metadata about the comments.
              </p>
            </li>
            <li>
              <strong>wp_links</strong>
              <p>
                This table contains information about custom links added to your site. It has been deprecated and is not used any longer. There are a
                few older plugins that still make use of it but usually, it is an empty table.
              </p>
            </li>
            <li>
              <strong>Other Tables</strong>
              <p>
                Most of the additional tables are created and managed by multiple plugins. Some of them are shown below. Example:
                wp_trp_original_strings
              </p>
              <div className="image" style={{ maxWidth: '350px' }}>
                <ModalImage small={WpAdditionalDB} large={WpAdditionalDB} alt="WpAdditionalDB" />
              </div>
            </li>
          </ul>
          <li>
            <strong>Graphical Structure of WordPress Database</strong>
            <div className="image" style={{ maxWidth: '500px' }}>
              <ModalImage small={WpDBStructure} large={WpDBStructure} alt="WpDBStructure" />
            </div>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default DatabaseStructure;
