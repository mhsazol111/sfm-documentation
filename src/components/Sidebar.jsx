import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar-inner bg-blue-50 lg:mr-5 mr-0 lg:p-5 p-3 rounded-md min-h-screen h-full">
      <ul className="menu">
        <li>
          <NavLink exact to="/">
            Introduction
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/core-infrastructure">
            Core infrastructure
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/themes">
            Themes
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/plugins">
            Plugins
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/file-structure">
            File Structure
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/database-structure">
            Database Structure
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/feature-updates">
            Feature Updates
          </NavLink>
          <ul>
            <li>
              <NavLink exact to="/feature-updates/december">
                December Updates
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
