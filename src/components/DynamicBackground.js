// components/DynamicBackground.js

import React, { useEffect } from 'react';
import Particles from 'particles.js';

function DynamicBackground() {
  useEffect(() => {
    Particles.init({
      selector: '.particles-background',
      maxParticles: 150,
      connectParticles: true,
      // More configuration options can be added here
    });
  }, []);

  return (
    <div className="particles-background"></div>
  );
}

export default DynamicBackground;
