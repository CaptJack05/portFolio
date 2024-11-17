import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
    const particlesInit = async (engine) => {
        await loadSlim(engine); // Load the slim version of tsparticles
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: "#0d47a1", // A dark blue background for a "space" vibe
                },
                fpsLimit: 120, // Higher FPS for smoother animations
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: ["grab", "repulse"], // Grab and repulse interactions
                        },
                        onClick: {
                            enable: true,
                            mode: ["push", "bubble"], // Push particles and bubble effect on click
                        },
                        resize: true, // Adjust particle behavior on resize
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            lineLinked: {
                                opacity: 0.5, // Line opacity when grabbing particles
                            },
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4, // Smooth repulsion effect
                        },
                        bubble: {
                            distance: 200,
                            size: 10, // Bubble size on click
                            duration: 1,
                            opacity: 0.8,
                            color: "#ff0000", // Change to red bubbles on click
                        },
                        push: {
                            quantity: 5, // Add more particles on click
                        },
                    },
                },
                particles: {
                    number: {
                        value: 80, // Increase the particle count
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: ["#ffffff", "#00ff00", "#ff00ff"], // Gradient-like particle colors
                    },
                    shape: {
                        type: "circle", // Circular particles
                    },
                    opacity: {
                        value: 0.7,
                        random: true, // Random opacity for each particle
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.3, // Minimum opacity during animation
                        },
                    },
                    size: {
                        value: 5,
                        random: true, // Random particle size
                        anim: {
                            enable: true,
                            speed: 3,
                            size_min: 0.3,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 2, // Speed of particle movement
                        direction: "none",
                        outModes: {
                            default: "out",
                        },
                        trail: {
                            enable: true, // Enable trailing effect
                            length: 10,
                            fillColor: "#000000", // Match background color for smooth blending
                        },
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1.5,
                        anim: {
                            enable: true, // Enable link opacity animation
                            speed: 0.5, // Animation speed of link fading
                            opacity_min: 0.1, // Min opacity of links
                        },
                    },
                },
                retinaDetect: true, // Optimize for high-resolution displays
            }}
        />
    );
};

export default ParticlesBackground;
