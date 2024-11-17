import React from 'react';
import './About.css';
function About() {
    return (
        <section id="about-section">
            <h2>About Me</h2>
            <p>
                I am a dynamic and innovative Full Stack Developer with a strong foundation in designing, developing, and deploying scalable web applications. 
                Currently pursuing a Bachelor of Technology from Sir Chhotu Ram Institute of Engineering and Technology (2023-2027).
                Proficient in a wide array of front-end and back-end technologies, including Java, JavaScript, HTML, CSS, React, Node.js, and various databases.
                Passionate about leveraging technical expertise and problem-solving skills to contribute to cutting-edge projects and deliver seamless user experiences.
            </p>

            <h3>Technical Skills</h3>
            <ul>
                <li><strong>Front-End:</strong> JavaScript, React.js, Svelte, HTML, CSS, Tailwind CSS</li>
                <li><strong>Back-End:</strong> Java, Node.js, Spring Boot, Microservices Architecture</li>
                <li><strong>Databases:</strong> MongoDB, MySQL</li>
                <li><strong>Tools & Platforms:</strong> Git/GitHub, Docker, AWS, Postman, Linux</li>
                <li><strong>Programming Languages:</strong> Python, C, C++</li>
            </ul>

            <h3>Notable Projects</h3>
            <ul>
                <li>
                    <strong>Code-For-Challenge:</strong> Full Stack Developer role in designing and developing an interactive website to aid beginners in learning to code from scratch.
                    <br />
                    <strong>Key Contributions:</strong> Facilitated live team loading from the database.
                    <br />
                    <strong>Technologies:</strong> JavaScript, React.js, Spring Boot, MongoDB, Docker, REST API, HTML
                    <br />
                    <a href="#" target="_blank" rel="noopener noreferrer">Project Link</a>
                </li>
            </ul>

            <h3>Achievements</h3>
            <ul>
                <li>
                    Successfully participated in multiple hackathons, including being part of the winning team at the College Hack event, showcasing the ability to perform under pressure and devise innovative solutions to technical challenges.
                </li>
            </ul>

            <h3>Career Goals</h3>
            <p>
                Committed to continuous learning and staying updated with the latest industry trends to ensure optimal performance and functionality in every project. 
                Seeking opportunities to leverage my technical skills and passion for problem-solving to contribute to innovative projects and deliver impactful results.
            </p>

            <p>Connect with me to explore potential collaborations and opportunities in the tech industry.</p>
        </section>
    );
}

export default About;
