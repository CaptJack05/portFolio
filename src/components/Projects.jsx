import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const projectItems = [
    { id: 1, title: "Novartis NEST", imgSrc: "/src/assets/images/project1.jpg", description: "Win PPIs and cash prizes.", daysLeft: "21 days left", participants: "4,974 Registered" },
    { id: 2, title: "Strat Challenge", imgSrc: "/src/assets/images/project2.jpg", description: "Lead with strategy.", daysLeft: "1 day left", participants: "494 Registered" },
    { id: 3, title: "EY Techathon 5.0", imgSrc: "/src/assets/images/project3.jpg", description: "Harnessing AI to transform Bharat.", daysLeft: "5 days left", participants: "Open for Registration" },
    { id: 4, title: "Global University Fair", imgSrc: "/src/assets/images/project4.jpg", description: "Explore postgraduate programs.", daysLeft: "14th Nov - 1st Dec", participants: "125 Registered" },
];

const ProjectItem = ({ id, title, imgSrc, description, daysLeft, participants, onClick }) => (
    <div className="project-card" onClick={() => onClick(id)}>
        <img src={imgSrc} alt={title} className="project-image" />
        <div className="project-details">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-meta">
                <span>{participants}</span>
                <span>{daysLeft}</span>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            top: 0,
            left: -window.innerWidth * 0.8,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            top: 0,
            left: window.innerWidth * 0.8,
            behavior: 'smooth',
        });
    };

    const handleProjectClick = (id) => {
        navigate(`/project/${id}`);
    };

    return (
        <section id="projects-section">
            <h2>Featured Opportunities</h2>
            <div className="project-carousel">
                <button className="nav-btn left-btn" onClick={scrollLeft}>&lt;</button>
                <div className="project-container" ref={scrollRef}>
                    {projectItems.map((item) => (
                        <ProjectItem key={item.id} {...item} onClick={handleProjectClick} />
                    ))}
                </div>
                <button className="nav-btn right-btn" onClick={scrollRight}>&gt;</button>
            </div>
        </section>
    );
};

export default Projects;
