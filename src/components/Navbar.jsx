import "../index.css";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import myImage from "../assets/faviconnew.jpg";
import Cursor from "../components/cursor/Cursor";

const Navbar = () => {
    const [isOverText, setIsOverText] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleMouseOver = () => {
        setIsOverText(true);
    };

    const handleMouseOut = () => {
        setIsOverText(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const menuItems = [
        { href: "#hero", text: "Home" },
        { href: "#about", text: "About" },
        { href: "#skills", text: "Skills" },
        { href: "#projects", text: "Projects" },
        { href: "#Contact", text: "Contact Me" }
    ];

    return (
        <motion.div className="navbar">
            <div className="wrapper">
                <div className="logo-section">
                    <img src={myImage} alt="" className="logoicon" />
                    <motion.span
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Jayantika Gupta
                    </motion.span>
                </div>

                {/* Desktop Menu */}
                <motion.div className="menu desktop-menu">
                    {menuItems.map((item, index) => (
                        <motion.a
                            key={item.text}
                            href={item.href}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {item.text}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Hamburger Button */}
                <motion.button
                    className="hamburger"
                    onClick={toggleMenu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="hamburger-line"
                        animate={{
                            rotate: isMenuOpen ? 45 : 0,
                            y: isMenuOpen ? 6 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="hamburger-line"
                        animate={{
                            opacity: isMenuOpen ? 0 : 1
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="hamburger-line"
                        animate={{
                            rotate: isMenuOpen ? -45 : 0,
                            y: isMenuOpen ? -6 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeMenu}
                    >
                        <motion.div
                            className="mobile-menu"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {menuItems.map((item, index) => (
                                <motion.a
                                    key={item.text}
                                    href={item.href}
                                    onClick={closeMenu}
                                    onMouseOver={handleMouseOver}
                                    onMouseOut={handleMouseOut}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    {item.text}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Cursor isOverText={isOverText} />
        </motion.div>
    );
};

export default Navbar;