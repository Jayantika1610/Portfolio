import React,{useEffect,useState} from 'react'
import {motion} from "framer-motion"

import "./cursor.css"

const Cursor = () => {

    const [position, setPosition]= useState({x:0,y:0})

    useEffect(()=>{
        const mouseMovement= (e) =>{
            setPosition({x:e.clientX,y:e.clientY})
        }

        window.addEventListener("mousemove",mouseMovement);
        return ()=>{
            window.removeEventListener("mousemove",mouseMovement);
        };
    }, []);

    console.log(position);
    return (
        <motion.div 
        className="cursor" animate=
        {{ x: position.x, y: position.y }}>

        </motion.div>
    )
}

export default Cursor;
