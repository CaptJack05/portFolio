import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Home />
                <About />
                <Projects />
                <Gallery />
                
                <Contact />
            </main>
        </div>
    );
}

export default App;