import '../styles/About.css';
import aboutStickerFinal from '../assets/aboutmefinal.png';


export default function AboutMain(){
  return(
    <div className="about-main"> 
      <div className="about-main__sticker">
        <img src={aboutStickerFinal} alt="about" />
      </div>
      <div className="about-main__content">

        <div className="about-main__content__title">About me</div>
        <div className="about-main__content__desc">I am Dheeraj, a skilled front-end developer and Rust programmer with experience in five projects. My expertise lies in utilizing ReactJS for creating captivating user interfaces, while leveraging Rust for efficient and secure back-end development.</div>
          <div className="about-main__content__college">Bachelors - Manipal University Jaipur <i className='italic'>2025</i> </div>
        <div className="about-main__content__socials">

          <button className='about-main__content__socials__button button1'>Github</button>
          <button className='about-main__content__socials__button button2'>LinkedIn</button>
          <button className='about-main__content__socials__button button3'>Codespaces</button>
        </div>
      </div>
  
    </div>


  )
}
