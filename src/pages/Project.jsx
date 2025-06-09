import React from 'react';

const projects = [
  {
    title: "Options Pricing Model",
    description: "A tool that uses multiple financial engineering models to predict option prices for traders to consider while purchasing and selling options. The results include an option pricing binomial tree visual as well as sensitivity calculations with graphs with respect to the Black-Scholes Model. ",
    link: "https://options-pricer.onrender.com/",
    images: [ // Store multiple images in an array
      "/images/OptionPic1.png",
      "/images/OptionPic2.png",
      "/images/OptionPic3.png",
    ],
  },
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
    title: "Engineering Building Room of Requirement",
    description: "My group and I were tasked with designing a space in the new engineering that solves a problem that Columbia stakeholders care about. Our problem to solve was agency, and our solution is a futuristic and innovtaive space that fosters creativity and agency, while providing students with the exact resources they need to succeed. Our product is called the Room of Requirement (R.O.R.). ",
    link: "https://github.com/savnee-puranik/RoomOfRequirement",
    image: "/images/ROR.png",
    video: "/videos/HCDFinalVideo.mp4"
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
