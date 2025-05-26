import React, { useRef } from 'react'
import "./projects.css";
import python from "../../assets/pythonm.PNG";
import beats from "../../assets/beatsforge.jpeg";
import shuttle from "../../assets/shuttlesync.png"
import tictactoe from "../../assets/tictactoe2.PNG";
import jackpot from "../../assets/jackpot.PNG"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const items = [
    {
        id: 1,
        title: "beatsforge.com",
        img: beats,
        desc: "A website made of mainly html, css and javascript which will help you enhance your skills when it comes to instruments and has two options- drums and piano to be practiced online!",
        link: "https://jayantika1610.github.io/beatsforge.com/",
    },
    {
        id: 2,
        title: "Shuttle-Sync",
        img: shuttle,
        desc: "Project made as a part of the Internal Hackathon in a team of 4 which was a gps tracking system for the shuttles inside the campus which used to store the data in firebase.",
        link: "https://github.com/Jayantika1610",
    },
    {
        id: 3,
        title: "Tic-Tac-Toe",
        img: tictactoe,
        desc: "A web development project using HTML, CSS and JS. This is a user-friendly site for one of the most played games: tic-tac-toe",
        link: "https://jayantika1610.github.io/Tic-tac-toe/",
    },
    {
        id: 4,
        title: "Health-Track",
        img: python,
        desc: "It is a project using pandas and matplotlib which can easily store and extract data from a csv file and is capable of making sure that the current health is absolutely fine when it comes to the basic types.",
        link: "https://github.com/Jayantika1610",
    },
    {
        id: 5,
        title: "The-Dice-Jackpot",
        img: jackpot,
        desc: "The Jackpot Game is a fun and simple project built with HTML, CSS, and JavaScript. It uses a random number generator to chose a picture which has 1-6 labelled with the dice and get it to the display.",
        link: "https://jayantika1610.github.io/THE-DICE-JACKPOT/",
    },
]

const SingleProject = ({ item, index }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50])
    const textY = useTransform(scrollYProgress, [0, 1], [50, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    return (
        <section className="project-section" ref={ref}>
            <motion.div 
                className="container"
                style={{ opacity }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="wrapper">
                    <motion.div 
                        className="image-container" 
                        style={{ y: imageY }}
                    >
                        <motion.img 
                            src={item.img} 
                            alt={item.title}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                    </motion.div>
                    <motion.div 
                        className="text-container" 
                        style={{ y: textY }}
                    >
                        <motion.h2 
                            className="project-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            {item.title}
                        </motion.h2>
                        <motion.p 
                            className="project-desc"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            {item.desc}
                        </motion.p>
                        <motion.a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <motion.button 
                                className="project-github"
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "#8b5cf6",
                                    boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                View Project
                            </motion.button>
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

const Projects = () => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <div className="projects" ref={ref}>
            <motion.div 
                className="progress"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h4>My Projects</h4>
                <motion.div 
                    style={{ scaleX }} 
                    className="progressBar"
                    initial={{ scaleX: 0 }}
                />
            </motion.div>
            {items.map((item, index) => (
                <SingleProject item={item} key={item.id} index={index} />
            ))}
        </div>
    )
}

export default Projects;