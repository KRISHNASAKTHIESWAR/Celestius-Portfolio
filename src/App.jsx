import React from 'react';
import Home from './pages/Home';
import { Helmet } from 'react-helmet'; // Add React Helmet for SEO optimization

function App() {
  return (
    <>
      {/* SEO Optimization with React Helmet */}
      <Helmet>
        <title>Celestius - Portfolio</title>
        <meta name="description" content="Club Celestius' Portfolio" />
        <meta name="keywords" content="React, Python, MERN Stack, IoT, Robotics, AI, and so on" />
      </Helmet>

      <div className="bg-dark-200 min-h-screen">
        <Home />
      </div>
    </>
  );
}

export default App;
