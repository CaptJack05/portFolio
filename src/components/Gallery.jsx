import React from 'react';
import './Gallery.css';

const galleryItems = [
    { title: "IIT Madras", imgSrc: "/src/assets/images/image1.jpg", description: "BS Data Science and Applications" },
    { title: "GDSC Solutions Challenge Bootcamp", imgSrc: "/src/assets/images/image2.jpg", description: "Description" },
    { title: "Generative AI workshop", imgSrc: "/src/assets/images/image3.jpg", description: "Description" },
    { title: "Hackathons", imgSrc: "/src/assets/images/image4.jpg", description: "Description" },
    { title: "Summit", imgSrc: "/src/assets/images/image5.jpg", description: "Description" },
];

const GalleryItem = ({ title, imgSrc, description }) => {
    return (
        <div className="gallery-item">
            <img src={imgSrc} alt={title} className="gallery-image" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

const Gallery = () => {
    return (
        <section id="gallery-section">
            <h2>Gallery</h2>
            <div className="gallery-grid">
                {galleryItems.map((item, index) => (
                    <GalleryItem key={index} {...item} />
                ))}
            </div>
        </section>
    );
}

export default Gallery;
