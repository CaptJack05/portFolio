import React from 'react';
import Typical from 'react-typical';
import './Home.css';

const Home = () => {
    return (
        <section id="home-section" className="animated-background">
            <h1 className="animated-text">
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Welcome to My Website', 2000,
                        'I am Yadi', 2000,
                        'A Developer', 2000,
                        'A Designer', 2000,
                    ]}
                />
            </h1>
        </section>
    );
}

export default Home;
