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
      }, 3000)
    }
    timer()
  }, [])

  return (
    <>
      <div className=" about-page" id="about">
        <div className="about-wrap">
          <div className="text-zone">
            <p className="header">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['B', 'i', 'o', 'g', 'r', 'a ', 'p', 'h', 'y']}
                idx={15}
              />
            </p>
            

            <p>
            I'm a Full Stack Web Developer who enjoys building modern, responsive, and user-focused web applications. I started my journey in tech with a curiosity about how websites work, and that curiosity has grown into a passion for creating digital experiences that are both functional and visually appealing.
            </p>
            <p align="LEFT">
            I work with HTML, CSS, Bootstrap, JavaScript, React, Python, Django, PHP, Node.js, MySQL, PostgreSQL, and MongoDB, and I'm always eager to expand my knowledge by learning new tools and best practices. I enjoy solving problems, paying attention to the small details, and continuously improving my skills through hands-on projects.
            </p>
            <p>
            When I'm not coding, you'll usually find me exploring new technologies, refining personal projects, or learning something that helps me become a better developer. I'm excited about joining a team where I can contribute, keep learning, and help build software that creates real value.
            </p>

            <div className="flex">
              <div className="flex-one">
                <p>
                  <span className="me-3">Name:</span>Nwoye Vera
                </p>
                <p>
                  <span className="me-3">Birthday:</span>28 December 1999
                </p>
                <p>
                  <span className="me-3">Address:</span> Rumuola, Port Harcourt
                </p>
              </div>
              <div className="flex-two">
                <p>
                  <span className="me-3">Phone:</span>09031967914
                </p>
                <p>
                  <span className="me-3">Email:</span>veranwoye9@gmail.com
                </p>
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
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
