import React from 'react';

const projects = [
  {
    title: "EatMappNYC",
    description: "A food ranking app built for NYC restaurants. Allows users to rate and rank restaurants based on their experiences.",
    link: "https://github.com/savnee/EatMappNYC",
    images: [ // Store multiple images in an array
      "/images/EatMapp1.png",
      "/images/EatMapp2.png",
      "/images/EatMapp3.png",
    ],
  },
  {
    title: "Transformation Feasibility Model",
    description: "A predictive model for real estate transformation feasibility and pricing in Buenos Aires.",
    link: "https://link-to-your-project.com",
    image: "/images/transformation_model.png",
  },
  {
    title: "Birthday Website for My Boyfriend",
    description: "A personalized birthday website I made for my boyfriend.",
    link: "https://link-to-your-project.com",
    image: "/images/birthday_website.png",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            <div className="project-images">
              {Array.isArray(project.images) ? (
                project.images.map((image, idx) => (
                  <img key={idx} src={image} alt={`${project.title} image ${idx + 1}`} />
                ))
              ) : (
                <img src={project.image} alt={project.title} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
