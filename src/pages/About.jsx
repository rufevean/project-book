
import AboutMain from '../components/AboutMain.jsx';
import AboutNav from '../components/AboutNav.jsx';
import AboutText from '../components/AboutText.jsx';
export default function About(){
  return (
  <div className="About">
      <div className="about-grid">
      <AboutMain className="about-main-comp" />
      <AboutText className="about-Text-comp"/>
      </div>
      <AboutNav headerPage ={"02"} Nav1={"/skills"} Nav2={"/work"}  FooterName ={"About"} FooterNav1 ={"Skills"} FooterNav2 ={"Work"} className = "about-nav" />
       
    </div>
  )
}
