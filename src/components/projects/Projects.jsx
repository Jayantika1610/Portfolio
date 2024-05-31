import React, { useRef } from 'react'
import "./projects.css";
import python from "../../assets/pythonm.PNG";
import beats from "../../assets/beatsforge.jpeg";
import shuttle from "../../assets/shuttlesync.png"
import tictactoe from "../../assets/tictactoe2.PNG";
import jackpot from "../../assets/jackpot.PNG"
import { motion, useScroll, useTransform,useSpring } from "framer-motion"

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
        img:python,
        desc: "It is a project using pandas and matplotlib which can easily store and extract data from a csv file and is capable of making sure that the current health is absolutely fine when it comes to the basic types.",
        link: "https://github.com/Jayantika1610",
    },
    {
        id: 5,
        title: "The-Dice-Jackpot",
        img:jackpot,
        desc: "The Jackpot Game is a fun and simple project built with HTML, CSS, and JavaScript. It uses a random number generator to chose a picture which has 1-6 labelled with the dice and get it to the display.",
        link: "https://jayantika1610.github.io/THE-DICE-JACKPOT/",
    },
]


const SingleProject = ({item}) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-150,150])
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <motion.div className="image-container" ref={ref} style={{y}}>
                        <img src={item.img} alt={item.title} />
                    </motion.div>
                    <motion.div className="text-container" style={{y}}>
                        <h2 className="project-heading">{item.title}</h2>
                        <p className="project-desc">{item.desc}</p>
                        <a href={item.link} target="_blank"><button className="project-github">Github link</button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Projects = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end","start start"]
    })

    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })

    return (
        <div className="projects" ref={ref}>
            <div className="progress">
                <h4>My Projects</h4>
                <motion.div style={{scaleX}}className="progressBar"></motion.div>
            </div>
            {items.map(item=>(
                <SingleProject item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Projects;
