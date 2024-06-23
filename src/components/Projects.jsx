import React from 'react';
import './Projects.css';

const projectItems = [
    { title: "Project One", imgSrc: "/src/assets/images/project1.jpg", description: "Description of project one." },
    { title: "Project Two", imgSrc: "/src/assets/images/project2.jpg", description: "Description of project two." },
    { title: "Project Three", imgSrc: "/src/assets/images/project3.jpg", description: "Description of project three." },
];

const ProjectItem = ({ title, imgSrc, description }) => {
    return (
        <div className="project-item">
            <img src={imgSrc} alt={title} className="project-image" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

const Projects = () => {
    return (
        <section id="projects-section">
            <h2>Projects</h2>
            <div className="project-grid">
                {projectItems.map((item, index) => (
                    <ProjectItem key={index} {...item} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
