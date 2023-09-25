// components/Projects.js

import React, { useState } from 'react';
import ProjectModel from './ProjectModel';
import ProjectDetail from './ProjectDetail';

function Projects({ projectsList }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects">
      <ProjectModel onSelect={setSelectedProject} />
      {selectedProject && <ProjectDetail project={selectedProject} />}
      {/* More 3D models and details can be added similarly */}
    </div>
  );
}

export default Projects;
