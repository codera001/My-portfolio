import { Link } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faFile,
  faSuitcase,
  faClose,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
 
//   intersection observer API for active state upon scrolling
useEffect(() => {
    const sections = document.querySelectorAll(
      "#home,#about,#resume,#portfolio,#contact"
    );
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.15) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.15],
        rootMargin: "-120px 0px -40% 0px",
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/" onClick={() => setShowNav(false)}>
          <h1>
            <strong>VN</strong>
          </h1>
        </Link>

     
        <nav className={`nav ${showNav ? 'mobile-show' : ''}`}>
          <a
            href="#home"
            className={`nav-link home ${
              activeSection === 'home' ? 'active' : ''
            }`}
            onClick={() => {
              setActiveSection('home')
              setShowNav(false)
            }}
          >
            <FontAwesomeIcon icon={faHome} />
          </a>

          <a
            href="#about"
            className={`nav-link about ${
              activeSection === 'about' ? 'active' : ''
            }`}
            onClick={() => {
              setActiveSection('about')
              setShowNav(false)
            }}
          >
            <FontAwesomeIcon icon={faUser}  />
          </a>

         
          <a
            href="#resume"
            className={`nav-link resume ${
              activeSection === 'resume' ? 'active' : ''
            }`}
            onClick={() => {
              setActiveSection('resume')
              setShowNav(false)
            }}
          >
            <FontAwesomeIcon icon={faFile}  />
          </a>

          <a
            href="#portfolio"
            className={`nav-link portfolio ${
              activeSection === 'portfolio' ? 'active' : ''
            }`}
            onClick={() => {
              setActiveSection('portfolio')
              setShowNav(false)
            }}
          >
            <FontAwesomeIcon icon={faSuitcase} />
          </a>

          <a
            href="#contact"
            className={`nav-link contact ${
              activeSection === 'contact' ? 'active' : ''
            }`}
            onClick={() => {
              setActiveSection('contact')
              setShowNav(false)
            }}
          >
            <FontAwesomeIcon icon={faEnvelope}  />
          </a>

          <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="white"
            size="3x"
            className="close-icon"
          />
        </nav>

        <ul className="social-links">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/vera-nwoye-042b10195"
            >
              <FontAwesomeIcon icon={faLinkedin}  />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/codera001"
            >
              <FontAwesomeIcon icon={faGithub}  />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/vera_martins199"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/vuon.asy"
            >
              <FontAwesomeIcon icon={faFacebook}  />
            </a>
          </li>
        </ul>

        <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#5b84c4"
          size="3x"
          className="hamburger-icon"
        />
      </div>
    </>
  )
}

export default Sidebar
