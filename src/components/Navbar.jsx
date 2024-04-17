import "../index.css";
import {motion} from "framer-motion";
import myImage from "../assets/faviconnew.jpg";
const Navbar= () =>{
    return(
        <div className="navbar">
            {/*Sidebar*/}
            <div className="wrapper">
                <img src={myImage} alt="" className="logoicon"/>
                <motion.span 
                initial={{x:-100, opacity:0}} //invisible and intitial state is -100
                animate={{x:0, opacity:1}} //final state is x=0
                transition={{duration: 1}}>Jayantika Gupta</motion.span>
                <div className="menu">
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#Contact">Contact Me</a>
                </div>
            </div>
        </div>
    );
};
 
export default Navbar;


//framer motion use motion.div