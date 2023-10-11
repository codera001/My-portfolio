import ProfileImg from '../../assets/images/Profile.png'
import Resume from '../../assets/images/Resume.pdf'
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.scss'
import Navbar from "../Navbar";
import Loader from 'react-loaders'


const Home = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
    <div className='home-wrap'> 
        <Navbar/>
        <div className="container home-page" id='home'>
            <div className="text-zone">
                <h6 data-aos="fade-up" data-aos-duration="1200">Hello, My name is</h6><br/>
                <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" className='home-name'>VERA NWOYE </h1>
                <span></span>
                <p> I design and develop services for customers of all size, specializing in<br /> creating stylish, modern websites, web services and online stores</p>
                <button data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400"><a href={Resume}>Download CV</a></button>
            </div>

            <div className="ProfileImg">
               <img src={ProfileImg} alt="profilepic"></img> 
            </div>

        </div>
        <Loader type="pacman" />
        </div>
        </>
    )
}


export default Home