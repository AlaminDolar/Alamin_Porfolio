import React from 'react';
import { useEffect } from 'react';
import './Banner.css';
import profile from '../../images/Profile.png';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';


const Banner = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:3000,
            easing:'ease'
        });
    })
    return (
        <div id="Banner">
             <Container className="  pt-3 p-3 border rounded-3 shadow-lg">
             <Row className="mt-5 mb-5">
                 <Col className="mt-5 "sm={2} md={2} lg={6}>
                 <div data-aos="zoom-in" className='text ' >
                    <h2 className='fw-bold text-warning bg-dark p-1 rounded   '>MD.Alamin</h2>
                    <div className="typeWriter mb-4 shadow-lg">
                    <Typewriter
                    options={{
                        strings: [' I am a Junior Web Developer.', 'I have Skills in MERN stack','I want to learn new technology'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                    </div>
                    
                    <a href="" className='btn btn-warning'><strong>Hire Me</strong></a>
                </div>
                 </Col>
                 <Col  sm={2} md={2} lg={6}>
                 <div >
                
                    
                <img data-aos="flip-down" className="ms-3 " style={{width:250}} src={profile}alt="" />
              </div>
                 </Col>
                </Row>
             </Container>
           
                

          
           
                

                
          
        </div>
    );
};

export default Banner;