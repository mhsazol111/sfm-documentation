import React from 'react';
import Sidebar from './components/Sidebar';
import PageRoutes from './utilities/PageRoutes';
import Header from './components/Header';

import './App.css';

const App = () => {
  return (
    <div id="page-container">
      <Header />
      <div id="main-content" className="mt-5">
        <div className="container">
          <div className="row flex flex-wrap">
            <div id="sidebar" className="w-full lg:w-3/12">
              <Sidebar />
            </div>
            <div id="content-area" className="w-full lg:w-9/12">
              <div className="min-h-screen content-area-inner bg-blue-50 lg:p-5 p-3 rounded-md">
                <PageRoutes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
