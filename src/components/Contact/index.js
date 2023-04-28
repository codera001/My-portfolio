import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        const timer = () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000);
        }
        timer();
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_yweuh9c', 'template_bu3040l', form.current, 'laetMjR7iuDIm1vLF')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page" id='contact'>
                <div className="text-zone">
                    <p className='header'>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </p>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Nwoye Vera,
                    <br />
                    Jedo Mass Housing Estate,
                    <br />
                    Lugbe <br />
                    FCT, Abuja <br />
                    <br />
                    <span>veranwoye9@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <iframe  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=jedo%20mass%20housing%20estate%20lugbe+(vera)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" ><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>                  {/* <Popup>Vera lives here, come over for a cup of coffee :</Popup> */}
                </div>
            </div >
            <Loader type="pacman" />
        </>
    )
}

export default Contact
