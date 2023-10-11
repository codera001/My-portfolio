import { Link } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faFile, faSuitcase, faClose, faBars} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'


const Sidebar = () => {
//  const [isNavOpen, setIsNavOpen] = useState(false);
 const [showNav, setShowNav] = useState(false);
 
//  useEffect(() => {
//          const handleResize = () => {
//          if(window.innerWidth < 767 && isNavOpen){
//            setIsNavOpen(false);
//         }
//     };
//      window.addEventListener("resize", handleResize);
//      return () => window.addEventListener("resize", handleResize);
//   }, [isNavOpen]);

    return (
    <>
     

        <div className='nav-bar' >
            <Link className='logo' to='/'   onClick={() => setShowNav(false)}>
                <h1><strong>V</strong></h1>
            </Link>
           
            {/* <button className='sidebar-toggle' onClick={()=> setIsNavOpen(!isNavOpen)}>
            <span class='material-symbols-outlined'>{isNavOpen ?  "toggle_on" : "toggle_off"}</span>
           
        </button> */}
            <nav className={`nav ${showNav ? 'mobile-show' : ''}`}> 
                {/* <a href='#home' className='home'>
                    <FontAwesomeIcon icon={faHome} />
                </a> */}
                <a 
          exact="true"
          activeclassname="active"
          className='home nav-link'
          href='#home'
        //   onClick={() => setShowNav(false)}
          >
            
          <FontAwesomeIcon icon={faHome} color="white" />
        
        </a>

                <hr />
                <a 
          activeclassname="active"
          className="about nav-link"
          href="#about"
        //   onClick={() => setShowNav(false)}
          >
            
          <FontAwesomeIcon icon={faUser} color="white" />
          
        </a>
                {/* <a href='#about' className='about'>
                    <FontAwesomeIcon icon={faUser} color="white" />
                </a> */}

                <hr />
                <a
          activeclassname="active"
          className="resume nav-link"
          href='#resume'
        //   onClick={() => setShowNav(false)}
        >
            
          <FontAwesomeIcon icon={faFile} color="white" />
        </a>
                {/* <a href='#resume' className='resume'>
                    <FontAwesomeIcon icon={faFile} color="white" />
                </a> */}

                <hr />
                <a
          activeclassname="active"
          className="portfolio nav-link"
          href="#portfolio"
        //   onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="white" />
        </a>

                {/* <a href='#portfolio' className='portfolio'>
                    <FontAwesomeIcon icon={faSuitcase} color="white" />
                </a> */}

                <hr />
                <a
          activeclassname="active"
          className="contact nav-link"
          href="#contact"
        //   onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="white" />
        </a>

                {/* <a href='#contact' className='contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="white" />
                </a> */}

                <hr />
                <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="white"
          size="3x"
          className='close-icon' />
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/vera-nwoye-042b10195'>
                        <FontAwesomeIcon icon={faLinkedin} color="white" />
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/codera001'>
                        <FontAwesomeIcon icon={faGithub} color="white" />
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://twitter.com/vera_martins199'>
                        <FontAwesomeIcon icon={faTwitter} color="white" />
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.facebook.com/vuon.asy'>
                        <FontAwesomeIcon icon={faFacebook} color="white" />
                    </a>
                </li>
            </ul>

            <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="white"
          size="3x"
          className='hamburger-icon' />
        </div>
    </>
    );
    };


export default Sidebar