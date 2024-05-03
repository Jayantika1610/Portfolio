import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './cursor.css';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMovement = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMovement);
        return () => {
            window.removeEventListener("mousemove", mouseMovement);
        };
    }, []);

    return (
        <motion.div className="cursor" style={{ left: position.x, top: position.y }} />
    );
};

export default Cursor;



