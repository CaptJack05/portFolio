import React, { useState, useEffect } from 'react';
import './Home.css';

const messages = [
    'Welcome to My Website',
    'I am Hem',
    'A Developer',
    'A Designer'
];

const Home = () => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentMessageIndex(prevIndex => (prevIndex + 1) % messages.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="home-section" className="animated-background">
            <h1 className="animated-text">
                {messages[currentMessageIndex]}
            </h1>
        </section>
    );
}

export default Home;
