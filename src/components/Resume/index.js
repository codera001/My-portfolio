import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { data } from "./utils";
import { MdWork } from 'react-icons/md';
//   import { BsInfoCircleFill } from "react-icons/bs";

const Resume = () => {
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
            <div className="resume-page" id='resume'>
                <div className='resume-wrap'>
                <div className="text-zone">
                    <p className="header">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', 'R', 'e', 's ', 'u', 'm', 'e']}
                            idx={15}
                        />
                    </p>
                </div>
      
                <div className='timeline'>
                    <div className='timeline-experience'>
                        <h6 className='timeline_experience_header-text'>Experience</h6>
                        <VerticalTimeline
                            layout={"1-column"}
                            lineColor="#0D1B3D"
                        >
                            {data.experience.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="timeline__experience__vertical-timeline-element"
                                    contentStyle={{
                                        background: 'none',
                                        color: '#555',
                                        fontWeight: '500',
                                        border: '1.5px solid #0D1B3D',
                                        
                                    }}
                
                                    icon={<MdWork />}
                                    iconStyle={{
                                        background: '#0D1B3D',
                                        color: '#fd7e14',

                                    }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>
                                            {item.title}
                                        </h3>

                                        <h4>
                                            {item.subTitle}
                                        </h4>
                                    </div>
                                    <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>
                                     <p className='vertical-timeline-element-title-wrapper-date'>{item.date}</p>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                    <div className='timeline-education'>
                        <h6 className='timeline_education_header-text'>Education</h6>
                        <VerticalTimeline
                            layout={"1-column"}
                            lineColor="#0D1B3D"
                        >
                            {data.education.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="timeline__experience__vertical-timeline-element"
                                    contentStyle={{
                                        background: 'none',
                                        color: '#555',
                                        fontWeight: '500',
                                        border: '1.5px solid #0D1B3D',
                                    }}
                                
                                    icon={<MdWork />}
                                    iconStyle={{
                                        background: '#0D1B3D',
                                        color: '#fd7e14',

                                    }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>
                                            {item.title}
                                        </h3>

                                        <h4>
                                            {item.subTitle}
                                        </h4>
                                    </div>
                                    <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>
                                     <p className='vertical-timeline-element-title-wrapper-date'>{item.date}</p>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Resume
