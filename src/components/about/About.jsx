import React from 'react';
import { motion } from 'framer-motion';
import "./about.css";
import img from "../../assets/about_img.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import resume from "../../assets/finallatest.pdf";

const About = () => {
    const [changingText] = useTypewriter({
        words: ["Hello! I'm Jayantika Gupta, a passionate Computer Science Engineering student at VIT, Vellore. I have a strong interest in programming and problem-solving. My journey in the world of coding started when I was 16, and since then, I've been exploring various programming languages and technologies. I enjoy building projects that challenge me and enhance my skills."],
        typeSpeed: 25,
    });

    return (
        <div className="about">
            <section className="about-section" id="about">
                <div className="section-name"><h1 className="head">About Me</h1></div>
                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <p>{changingText}<Cursor /></p>

                        <div className="btn-container">
                            <button><a href="https://www.linkedin.com/in/jayantika-gupta-054906274/" target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
                            <button><a href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a></button>
                        </div>
                    </motion.div>
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <img src={img} alt="A photo of me" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default About;
