import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                {/* Adding Particles Background */}
                <ParticlesBackground />
                
                {/* Header Component */}
                <Header />

                {/* Routes for Main Sections */}
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <main>
                                <Home />
                                <About />
                                <Projects />
                                <Gallery />
                                <Contact />
                            </main>
                        } 
                    />
                    
                    {/* Route for Project Details */}
                    <Route path="/project/:id" element={<ProjectDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
