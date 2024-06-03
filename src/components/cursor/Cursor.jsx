import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './cursor.css';

const Cursor = ({ isOverText }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cursorSize, setCursorSize] = useState(30); 

    useEffect(() => {
        const mouseMovement = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMovement);
        return () => {
            window.removeEventListener("mousemove", mouseMovement);
        };
    }, []);

    useEffect(() => {
        if (isOverText) {
            setCursorSize(40); 
        } else {
            setCursorSize(30); 
        }
    }, [isOverText]);

    return (
        <motion.div 
            className="cursor" 
            style={{ 
                left: position.x, 
                top: position.y,
                width: `${cursorSize}px`, // Set cursor size dynamically
                height: `${cursorSize}px` // Set cursor size dynamically
            }} 
        />
    );
};

export default Cursor;
