import React from 'react';

function Contact() {
    return (
        <section id="contact-section">
            <h2>Contact</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" />
                
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
                
                <label htmlFor="message">Message</label>
                <textarea id="message"></textarea>
                
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
