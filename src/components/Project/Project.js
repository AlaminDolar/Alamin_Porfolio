import React from 'react';
import { Carousel, Container,Button } from 'react-bootstrap';
import one from '../../images/servies image/Freedom-travel.png';
import two from '../../images/servies image/Watch-Box.png';
import three from '../../images/servies image/Dental.png';
import './Project.css';

const Project = () => {
    return (
        <div className='section'>
            <h2 className='head-line'>Project</h2>
            <div className="project-section">
            <h2>My Recent Some Projects</h2>
            <Container>
                <Carousel className='c'>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={one}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={two}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={three}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </Container>
            <div className='buttoon-grp'>
            <Button variant="outline-success">Dentist</Button>{' '}
  <Button variant="outline-warning">Watch-Box</Button>{' '}
  <Button variant="outline-danger">Freedom-Travel</Button>{' '}
            </div>
            </div>
            
            

        </div>
    );
};

export default Project;