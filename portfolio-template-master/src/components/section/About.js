import React from 'react'
import { social } from '../../profile'
import { contact } from '../../profile'

import { about, section2title } from '../../profile'

const About = () => {
    return (
        <>
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
            <div className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo" id="not-dark2"></div>
            <div className="col-12 offset-md-1 col-md-6 about">
                <div className="About-title-box">
                <h1 id="About" className="red-line">{section2title}</h1>
                </div>
                <p className="lead about-text">
                    {about.paragraph}  
                </p>
            </div>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="inline-block">
                                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                                    {social.hackerrank && <a title="Visit HackerRank profile" rel="noopener noreferrer" target="_blank" href={social.hackerrank}><i className="fab fa-hackerrank"></i></a>}
                                    {social.envelope && <a title="Visit Envelope profile" rel="noopener noreferrer" target="_blank" href={social.envelope}><i className="fa fa-envelope"></i></a>}
                                    {social.twitter && <a title="Visit Twitter profile" rel="noopener noreferrer" target="_blank" href={social.twitter}><i className="fab fa-twitter"></i></a>}
                                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br />
                                </div>
                                {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
                            </div>
        </div>
        </>
    )
}

export default About
