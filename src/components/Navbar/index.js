import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <button
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <a href="https://github.com/codera001">
              Github <FontAwesomeIcon icon={faGithub} />
            </a>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
