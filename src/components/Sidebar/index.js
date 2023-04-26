import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faFile, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState , useEffect } from 'react'


const Sidebar = () => {
 const [isNavOpen, setIsNavOpen] = useState(false);
 
 useEffect(() => {
         const handleResize = () => {
         if(window.innerWidth < 767 && isNavOpen){
           setIsNavOpen(false);
        }
    };
     window.addEventListener("resize", handleResize);
     return () => window.addEventListener("resize", handleResize);
  }, [isNavOpen]);

    return (
    <>
     

        <div className={`nav-bar  ${isNavOpen ? "nav-open" : "nav-closed"}`} >
            <Link className='logo' to='/'>
                <h1><strong>V</strong></h1>
            </Link>
           
            <button className='sidebar-toggle' onClick={()=> setIsNavOpen(!isNavOpen)}>
            <span class='material-symbols-outlined'>{isNavOpen ?  "toggle_on" : "toggle_off"}</span>
           
        </button>
            <nav className='nav'>
                <a href='/#home' className='home'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </a>

                <hr />

                <a href='/#about' className='about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </a>

                <hr />

                <a href='/#resume' className='resume'>
                    <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
                </a>

                <hr />

                <a href='/#portfolio' className='portfolio'>
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </a>

                <hr />
                <a href='/#contact' className='contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </a>

                <hr />
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/vera-nwoye-042b10195'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/codera001'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://twitter.com/vera_martins199'>
                        <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.facebook.com/vuon.asy'>
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    </>
    );
    };


export default Sidebar