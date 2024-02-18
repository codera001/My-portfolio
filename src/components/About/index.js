import { useEffect, useState } from 'react'
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
   
  useEffect(() => {
   const timer = () => { 
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
    }
    timer();
  }, [])

  return (
    
    <>
      <div className="container about-page" id='about'>
        <div className="text-zone">
          <h1 className="header">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['B', 'i', 'o', 'g', 'r', 'a ', 'p', 'h', 'y']}
              idx={15}
            />
          </h1>
          <p className=''> 
            I'm a very ambitious fullstack web developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time. I have skills in HTML, CSS, BOOTSTRAP ,JAVASCRIPT, REACT, LARAVEL, PHP, MYSQL, NODEJS
          </p>
          <p>
            If I need to define myself in one sentence that would be passionate, 
            goal driven and tech-obsessed!!!
          </p>

          <div className='flex'>
           <div className='flex-one'>
           <p><span className='me-3'>Name:</span>Nwoye Vera</p>
            <p><span className='me-3'>Birthday:</span>28 December 1999</p>
            <p><span className='me-3'>Address:</span> Rumuola, Port Harcourt</p>
           </div>
           <div className='flex-two'>
           <p><span className='me-3'>Phone:</span>09031967914</p>
            <p><span className='me-3'>Email:</span>veranwoye9@gmail.com</p>
        
           </div>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
    
  )
}

export default About

