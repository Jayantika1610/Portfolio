import "../index.css"
import {motion} from "framer-motion"
import heropic from "../assets/heropic.png"
import {useTypewriter,Cursor} from "react-simple-typewriter"


const contentVariants={
  initial:{
    x:0,
    y:-300,
    opacity:0,
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.05
    }
  }
}

const slidingtext={
  initial:{
    x:-0,
  },
  animate:{
    x:"-50%",
    transition:{
      duration:4,
      repeat:Infinity,
      repeatType:"mirror"
    }
  }
}


const imageVariants = {
  initial: {
    x:0,
    y: 0,
    opacity: 1,
  },
  animate: {
    y: ["0%", "-20%", "0%"], 
    opacity: 1,
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};


const Hero = () => {

  const [changingText]=useTypewriter({
    words: ["a Front-End Web Developer","an ML Enthusiast","a Competitive Programmer"],
    loop:{}
  })
  
  return (
    //initial gives how it would be initiall and whileInView to tell how the animate part gets executed when it is in view
    <div className="hero" >
      <div className="hero-wrap">
        <motion.div className="hero-text" variants={contentVariants} initial="initial" whileInView="animate">
          <motion.h2 variants={contentVariants} className="hero-h2">Hi, This is Jayantika</motion.h2>
          <motion.h1 variants={contentVariants} className="hero-h1">I'm {changingText}<Cursor cursorStyle="|"/></motion.h1>
          <motion.div variants={contentVariants} className="btn-container">
            <motion.button variants={contentVariants} className="hero-button"><a href="#" download>See my projects</a></motion.button>
            <motion.button variants={contentVariants} className="hero-button"><a href='#Contact'>Contact Me</a></motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="movingText" variants={slidingtext} initial="initial" animate="animate">
        CSE Undergrad
      </motion.div>
      <div  className="hero-image" >
        <motion.img src={heropic} variants={imageVariants} initial="initial" whileInView="animate"/>
      </div>
    </div>
  )
}

export default Hero