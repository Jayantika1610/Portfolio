import "./index.css";
// import Particle from "./utils/particles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Timeline from "./components/timeline/Timeline";
import Projects from "./components/projects/Projects";
import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import Skills from "./components/skills/Skills"

function App(){
    return <div className="App">
        <Cursor/>
        {/* <Particle /> */}
        <section id="hero">
            <Navbar/>
            <Hero/>
        </section>
        <section id="about">
            <About/>
        </section>
        <section id="timeline">
            <Timeline/>
        </section>
        <section id="skills">
            <Skills/>
        </section>
        <section id="projects">
            <Projects/>
        </section>
        <section id="Contact">
            <Contact/>
        </section>
        <section id="Footer">
            <Footer/>
        </section>
        

    </div>
}


export default App;