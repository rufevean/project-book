import '../styles/skills.css'
import splinepng from '../assets/67da97237cb7a3ab0bc979e51cd0ac959a3a3595 1.png'
import bashpng from '../assets/devicon_bash1.png'
import cpng from '../assets/devicon_c.png'
import gitpng from '../assets/devicon_git.png'
import reactpng from '../assets/devicon_react.png'
import vuepng from '../assets/devicon_vuejs.png'
import pppng from '../assets/Group.png'
import astropng from '../assets/logos_astro-icon.png'
import blenderpng from '../assets/logos_blender.png'
import figmapng from '../assets/logos_figma.png'
import javascriptpng from '../assets/logos_javascript.png'
import sasspng from '../assets/logos_sass.png'
import tensorflowpng from '../assets/logos_tensorflow.png'
import threejspng from '../assets/logos_threejs.png'
import vimpng from '../assets/logos_vim.png'
import rustpng from '../assets/simple-icons_rust.png'
import pythonpng from '../assets/vscode-icons_file-type-python.png'
import starpng from '../assets/star.png'

export default function SkillsMain(){
  return(
  <div className="Skills-main-div">
    <div className='Skills-main-lan'>
     <div className='skills-main-lan-head'> LANGUAGES </div>
      <div className='Skills-main-lan-con'>
        <div className='python'>
              <img src={pythonpng} />
            <div className='python-head'>
              PYTHON
            </div>

            <div className='python-rating'>2.5 <img src={starpng} /> </div>
  

          </div>
        <div className='c'>
              <img src={cpng} />
            <div className='c-head'>
            C 
            </div>

            <div className='python-rating'>1 <img src={starpng} /></div></div>
        <div className='rust'>
              <img src={rustpng} />
            <div className='rust-head'>
              RUST
            </div>

            <div className='rust-rating'>2<img src={starpng} /></div></div>
        <div className='javascript'>
              <img src={javascriptpng} />
            <div className='javascript-head'>
              JAVASCRIPT
            </div>

            <div className='python-rating'>3.5<img src={starpng} /> </div></div>
      </div>
      </div>
    <div className='Skills-main-lib'>
       <div className='Skills-main-lib-head'> FRAMEWORKS/LIBRARIES </div>
        <div className='Skills-main-lib-con'>

      <div className='sass'>
              <img src={sasspng} />
            <div className='javascript-head'>
            SASS
            </div>

            <div className='python-rating'>3.5<img src={starpng} /> </div></div>
      <div className='tensorflow'>
              <img src={tensorflowpng} />
            <div className='javascript-head'>
            TENSORFLOW
            </div>

            <div className='python-rating'>3<img src={starpng} /> </div></div>
      <div className='react'>
              <img src={reactpng} />
            <div className='javascript-head'>
            REACT.js
           </div>

            <div className='python-rating'>3.5<img src={starpng} /> </div></div>
      <div className='vue'>
              <img src={vuepng} />
            <div className='javascript-head'>
  VUE.js

            </div>

            <div className='python-rating'>2<img src={starpng} /> </div></div>
      <div className='three'>
              <img src={threejspng} />
            <div className='javascript-head'>
            THREE.js
           </div>

            <div className='python-rating'>2<img src={starpng} /> </div></div>
      <div className='astro'>
              <img src={astropng} />
            <div className='javascript-head'>
              ASTRO.js
            </div>

            <div className='python-rating'>1.5<img src={starpng} /> </div></div>



        </div>
      </div>
    <div className='Skills-main-tools'>

      <div className='Skills-main-tools-head'> TOOLS </div>
      <div className='Skills-main-tools-con' >
          <div className='spline'>
              <img src={splinepng} />
            <div className='javascript-head'>
SPLINE            </div>

            <div className='python-rating'>2<img src={starpng} /> </div></div>
          <div className='vim'>
              <img src={vimpng} />
            <div className='javascript-head'>
           VIM </div>

            <div className='python-rating'>2.5<img src={starpng} /> </div></div>
          <div className='figma'>
              <img src={figmapng} />
            <div className='javascript-head'>
            FIGMA</div>

            <div className='python-rating'>3<img src={starpng} /> </div></div>
          <div className='pp'>
              <img src={pppng} />
            <div className='javascript-head'>
           PREMIER PRO </div>

            <div className='python-rating'>2.5<img src={starpng} /> </div></div>
          <div className='blender'>
              <img src={blenderpng} />
            <div className='javascript-head'>
            BLENDER</div>

            <div className='python-rating'>1<img src={starpng} /> </div></div>
          <div className='git'>
              <img src={gitpng} />
            <div className='javascript-head'>
         GIT   </div>

            <div className='python-rating'>3<img src={starpng} /> </div></div>
          <div className='bash'>
              <img src={bashpng} />
            <div className='javascript-head'>
          BASH  </div>

            <div className='python-rating'>3<img src={starpng} /> </div></div>


        </div>



      </div>
<div className='Skills-main-footer'>note : the stars here are just my interpretation of my knowledge in the field and its out of 5 </div>
    </div>
  )
}
