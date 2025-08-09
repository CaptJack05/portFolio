import React, { useState, useEffect } from "react";
import AnimatedIntro from "./Components/AnimatedIntro"; //Intro text

export default function AnimatedIntro() {
  const words = [
    "Hi, I'm Hemchandra Jha",
    "Hi, I'm an Innovator",
    "Hi, I'm an Engineer",
    "Hi, I'm a Creator"
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!deleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100); // typing speed
    } 
    else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50); // deleting speed
    } 
    else if (!deleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 1500); // pause before deleting
    } 
    else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent border-r-4 border-purple-300 inline-block">
      {text}
    </h1>
  );
}
