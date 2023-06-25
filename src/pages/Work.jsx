import { NavLink } from "react-router-dom";
import AboutNav from '../components/AboutNav'
import '../styles/About.css'
import '../styles/work.css'
import port from '../assets/arx.png'
import arx from '../assets/arxfinal.png'
import w3web from '../assets/w3web.png'
import reactpng from '../assets/devicon_react.png'
import figmapng from '../assets/logos_figma.png'
import gitpng from '../assets/devicon_git.png'
import threepng from '../assets/logos_threejs.png'
import rustpng from '../assets/simple-icons_rust.png'
import javascriptpng from '../assets/logos_javascript.png'
import sasspng from '../assets/logos_sass.png'
import worksticker from '../assets/worksticker.png'
export default function Work() {
  return (
    <div className="work">
      <AboutNav headerPage={"04"} Nav1={"/skills"} Nav2={"/about"} FooterName={"Work"} FooterNav1={"Skills"} FooterNav2={"About"} className="about-nav" />
      <div className="work-header">MY WORK</div>
      <div className="work-container">
        <NavLink className="arx con">
          <img src={arx} className="arx-img" />
          <div className="arx-desc"> Arx, a website  to showcase our innovative solution that brings real estate and blockchain together.</div>
          <div className="arx-stack"><img src={reactpng} />
            <img src={figmapng} />
            <img src={gitpng} />
          </div>



        </NavLink>
        <NavLink className="w3w con">
          <img src={w3web} className="w3web-img" />
          <div className="arx-desc">Explore and plan your journey to pursue a master's degree abroad with our innovative three.js frontend and powerful Rust backend.</div>
          <div className="arx-stack"><img src={reactpng} />
            <img src={rustpng} />
            <img src={threepng} />
          </div>

        </NavLink>
        <NavLink className="port con">
          <img src={port} className="port-img" />
          <div className="arx-desc">Showcasing my skills, achievements, and creativity in a dynamic portfolio website that elevates my online presence.</div>
          <div className="arx-stack">

            <img src={javascriptpng} />
            <img src={sasspng} />
          </div>

        </NavLink>


      </div>
      <img className="work-sticker" src={worksticker} />
    </div>
  )
}
