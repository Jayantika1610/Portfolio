import "../index.css";
import React, { useState } from 'react';
import {motion} from "framer-motion";
import myImage from "../assets/faviconnew.jpg";
import Cursor from "../components/cursor/Cursor";
const Navbar = () => {
    const [isOverText, setIsOverText] = useState(false); 
    const handleMouseOver = () => {
        setIsOverText(true);
    };

    const handleMouseOut = () => {
        setIsOverText(false);
    };

    return (
        <div className="navbar">
            {/* Sidebar */}
            <div className="wrapper">
                <img src={myImage} alt="" className="logoicon" />
                <motion.span
                    initial={{ x: -100, opacity: 0 }} // invisible and initial state is -100
                    animate={{ x: 0, opacity: 1 }} // final state is x=0
                    transition={{ duration: 1 }}
                >
                    Jayantika Gupta
                </motion.span>
                <div className="menu">
                    <a href="#hero" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Home</a>
                    <a href="#about" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>About</a>
                    <a href="#skills" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Skills</a>
                    <a href="#projects" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Projects</a>
                    <a href="#Contact" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Contact Me</a>
                </div>
            </div>
            {/* Cursor */}
            <Cursor isOverText={isOverText} />
        </div>
    );
};

export default Navbar;

//framer motion use motion.div