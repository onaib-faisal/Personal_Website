// components/ProjectDetail.js

import React from 'react';

function ProjectDetail({ project }) {
  return (
    <div className="project-detail">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Technologies Used:</strong> {project.technologies.join(', ')}</p>
      <p><strong>Challenges:</strong> {project.challenges}</p>
      {project.demoLink && <a href={project.demoLink}>View Demo</a>}
      {/* You can also add a video or any other content here */}
    </div>
  );
}

export default ProjectDetail;
