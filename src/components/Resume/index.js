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
            <div className="container resume-page" id='resume'>
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
                        <h3 className='timeline_experience_header-text'>Experience</h3>
                        <VerticalTimeline
                            layout={"1-column"}
                            lineColor="#fd7e14"
                        >
                            {data.experience.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="timeline__experience__vertical-timeline-element"
                                    contentStyle={{
                                        background: 'none',
                                        color: '#fd7e14',
                                        border: '1.5px solid #fd7e14'
                                        
                                    }}
                
                                    icon={<MdWork />}
                                    iconStyle={{
                                        background: '#181818',
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
                        <h3 className='timeline_education_header-text'>Education</h3>
                        <VerticalTimeline
                            layout={"1-column"}
                            lineColor="#fd7e14"
                        >
                            {data.education.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="timeline__experience__vertical-timeline-element"
                                    contentStyle={{
                                        background: 'none',
                                        color: '#fd7e14',
                                        border: '1.5px solid #fd7e14'
                                    }}
                                
                                    icon={<MdWork />}
                                    iconStyle={{
                                        background: '#181818',
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
            <Loader type="pacman" />
        </>
    )
}

export default Resume
