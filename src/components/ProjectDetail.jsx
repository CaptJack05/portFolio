import React from 'react';
import { useParams } from 'react-router-dom';

const projectDetails = {
    1: { title: "Novartis NEST", description: "Detailed info about Novartis NEST...", imgSrc: "/src/assets/images/project1.jpg" },
    2: { title: "Strat Challenge", description: "Detailed info about Strat Challenge...", imgSrc: "/src/assets/images/project2.jpg" },
    3: { title: "EY Techathon 5.0", description: "Detailed info about EY Techathon...", imgSrc: "/src/assets/images/project3.jpg" },
    4: { title: "Global University Fair", description: "Detailed info about Global University Fair...", imgSrc: "/src/assets/images/project4.jpg" },
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectDetails[id];

    if (!project) return <h2>Project Not Found</h2>;

    return (
        <div className="project-detail">
            <h2>{project.title}</h2>
            <img src={project.imgSrc} alt={project.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectDetail;
