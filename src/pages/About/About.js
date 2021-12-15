import React from 'react';
import './About.css';
import profile from '../../images/About/About.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:2000,
            easing:'ease'});
        
    })
    return (
        <div className='about' id='aboutMe'>
            <Container className='p-1'>
            <h2 className='text-light bg-dark p-2 rounded-pill  '>About me</h2>
            </Container>
            <Container className="pt-3 p-3 rounded-3 shadow-lg">
            <Row className="mt-5 mb-5">
                <Col className="mt-5 "sm={2} md={2} lg={6}>
                  <div data-aos='fade-up'>
                  <img style={{width:300}} src={profile} alt="" />
                  </div>
                </Col>
                
                <Col sm={2} md={2} lg={6}>
                <div data-aos='flip-up' className="text-w p-3">
                    <h2 className='text-warning rounded-2 px-5 bg-dark'>Hello I'm Md.Al-amin</h2>
                   <div className='typeWriter mb-4 shadow-lg'>
                   <Typewriter
                    options={{
                              
                    strings:['Full-Stack Web Developer'],
                    autoStart: true,
                        loop: true,
                    }}
                    
                    />
                       </div> 
                    <p>Hey, My name is Alamin. I am from Jhenidah. I am graduated in Computer Science and Engineering from Daffodil International University.  Now I am a full-stack web developer.
                        I have working experience with many technologies.</p> <br />
                        <p> Experienced work with React.js, MongoDB, express, firebase, Heroku. Some projects already I make using my learning skill. Now a job internship is needed to shine my skill.</p>
                    <p><span>Front-End</span> <br />
                        Html5,CSS,Bootstrap,Tailwind,MaterialUi,JavaScripte,Es6</p>
                    <p><span>Back-End</span> <br />
                        MongoDB,Express Js,Node Js, RestApi</p>
                    <p>
                        <span>Tools</span> <br />
                        Git, Google Chrome, VS Code, Netlify, Heroku, Figma, Photoshop</p>
                    <a href="https://drive.google.com/uc?export=download&id=1KXbXNwwgGWzps9sJ5gemWiKAiv7lmVLt" className='btn btn-warning rounded-pill'><strong>Download Resume</strong></a>
                </div>
                </Col>
                
               

            </Row>
                    
            </Container>
               
            
        </div>
    );
};

export default About;