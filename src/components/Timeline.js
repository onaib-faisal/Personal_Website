// components/Timeline.js

import React from 'react';

function Timeline() {
  return (
    <div className="timeline">
      {/* Sample timeline event */}
      <div className="timeline-event">
        <div className="timeline-icon"></div>
        <div className="timeline-content">
          <h3>The University of Leeds</h3>
          <p>Degree: BSc Computer Science (Honours), Sep 2023 – Present</p>
        </div>
      </div>
      {/* More timeline events can be added similarly */}
    </div>
  );
}

export default Timeline;
