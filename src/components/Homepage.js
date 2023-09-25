// components/Homepage.js

import React from 'react';
import DynamicBackground from './DynamicBackground';
import HolographicCard from './HolographicCard';
import Navigation from './Navigation';

function Homepage() {
  return (
    <div className="homepage">
      <DynamicBackground />
      <HolographicCard />
      <Navigation />
      {/* Any other homepage components can be added here */}
    </div>
  );
}

export default Homepage;
