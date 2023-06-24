import { NavLink } from 'react-router-dom';
import '../styles/About.css' 
import homepng from '../assets/home.png'
import arrow from '../assets/line.png'
export default function AboutNav(props)
        
  


{

    let Nav1 = props.Nav1;
    let Nav2 = props.Nav2;
    let headerPage = props.headerPage;
    let FooterName = props.FooterName;
    let FooterNav1 = props.FooterNav1;
    let FooterNav2 = props.FooterNav2;
  return(
    <div className = "about-nav">
        <NavLink to="/"><img className="about-nav-home-icon" src={homepng}/></NavLink>
        <div className="about-nav-header">
        <hr />
        <div className="about-nav-header-page">{headerPage}</div>
        <hr />

      </div>
        <div className="about-nav-footer">
        <hr className='about-nav-footer-firsthr'/>
        <div className="about-nav-footer-page">{FooterName}</div>
        <hr className='about-nav-footer-hrmid'/>
        < img src={arrow} />
        <div className="about-nav-footer-links">
        <div className="about-nav-footer-link1 link1"><NavLink to={Nav1}>{FooterNav1}</NavLink></div>
        <div className="about-nav-footer-link1 link2"><NavLink to={Nav2}>{FooterNav2}</NavLink></div>
        </div>
        < img src={arrow}  className='arrow-reverse'/>
        <hr />
      </div>

    </div>
  )
}
