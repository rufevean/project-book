import '../styles/homepage.css'
import Model from '../components/Model.jsx'
import hi1 from '../assets/hi1.png'
export default function Homepage(){
  return(
  <div className='homepage'>
      < Model />
      <div className='homepage-socials'>
            <div className='homepage-codeforces option'>Codeforces</div>
            <div className='homepage-linkedin option'>LinkedIn</div>
            <div className='homepage-github option'>Github</div>
      </div>
      <div className='homepage-grid'>
     <div className='homepage-text'>
      <div className='homepage-name'>Dheeraj Chowdary</div>
      <div className='homepage-text-subtext'>Frontend Developer and Rust programmer</div>
      <div className='homepage-portfolio-text'>Portfolio</div>
      </div>
       <div className='homepage-pages'>
        <div className='homepage-pages-about nav'>About</div>
        <div className='homepage-pages-skills nav'>Skills</div>
        <div className='homepage-pages-work nav'>Work</div>
      </div>
      </div>
      <img src={hi1} className='sticker' />
    </div>
  )
}
