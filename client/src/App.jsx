// 07.11. Successful :)
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import LatestTopics from './components/LatestTopics';
import Register from './components/Register';
import AllTopics from './components/AllTopics';
import CreateTopic from './components/CreateTopic';
import DetailsPage from './components/DetailsPage';
import Profile from './components/Profile';

import './components/styles.css';
import './components/register.css';
import './components/allTopics.css';
import './components/createTopic.css';
import './components/detailsPage.css';
// import './components/profile.css';


function App() {
  return (
    <div>
      <div className="site-wrapper">
        <Header />
        <Routes>
          <Route path="/latestTopics" element={<LatestTopics />} />
          <Route path='/allTopics' element={<AllTopics />} />
          <Route path='/createTopic' element={<CreateTopic />} />
          <Route path='/register' element={<Register />} />

          {/* <Route path='/detailsPage' element={<DetailsPage />} /> */}

        </Routes>
        
        
        {/* <Profile /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
