import SkillsMain from '../components/SkillsMain.jsx'
import SkillsText from '../components/SkillsText.jsx'
import AboutNav from '../components/AboutNav.jsx'
import '../styles/skills.css'
import skillsticker from '../assets/aboutsticker.png'
import '../styles/About.css'
export default function Skills(){
  return(
    <div className="Skills">
      <div className="Skills-header">MY ABILITIES</div>
      <div className="Skills-container">
        < SkillsMain />
        < SkillsText />
      </div>
      < img src={skillsticker} className='Skills-sticker' />
      <AboutNav headerPage ={"03"} Nav1={"/work"} Nav2={"/about"}  FooterName ={"Skills"} FooterNav1 ={"Work"} FooterNav2 ={"About"} className = "about-nav" />
    </div>
  )
}
