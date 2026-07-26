import ProfileImg from '../../assets/images/Profile.png'
import Resume from '../../assets/images/Resume.pdf'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.scss'
import Navbar from '../Navbar'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="containers" id="home">
        <Navbar />
        <div className='home-page'>
          <div className="home-wrap ">
            <div className="text-zone">
              <h6 data-aos="fade-up" data-aos-duration="1200">
                Hello, My name is
              </h6>
              <br />
              <h1 className="">
                <span
                  className="pan"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  VERA
                </span>
                <br />
                <span
                  className="home-name"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  NWOYE
                </span>
              </h1>

              <span className="title"></span>
              <p>
                {' '}
                I design and develop services for customers of all size,
                specializing in
                <br /> creating stylish, modern websites, web services and
                online stores
              </p>
              <button
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <a href={Resume}>
                  Download CV <FontAwesomeIcon icon={faDownload} />
                </a>
              </button>
            </div>

            <div className="profile-img ">
              <img src={ProfileImg} alt="profilepic"></img>
            </div>
          </div>
          <Loader type="pacman" />
        </div>
      </div>
    </>
  )
}

export default Home
