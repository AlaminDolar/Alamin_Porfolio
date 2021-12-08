import React from 'react';
import './About.css';
import profile from '../../images/About/About.jpg';

const About = () => {
    return (
        <div className='about-section' id='about'>
            <h2 className='head-line'>About me</h2>
            <section className='display'>
                <div className="Picture-W">
                    <img src={profile} alt="" />
                </div>
                <div className="text-w">
                    <h2>Hello I'm Md.Al-amin</h2>
                    <h4>Full-Stack Web Developer</h4>
                    <p>Hey, My name is Alamin. I am from Jhenidah. I am graduated in Computer Science and Engineering from Daffodil International University.  Now I am a full-stack web developer.
                        I have working experience with many technologies.</p>
                    <p>.<span>Front-End</span> <br />
                        Html5,CSS,Bootstrap,Tailwind,MaterialUi,JavaScripte,Es6</p>
                    <p>.<span>Back-End</span> <br />
                        MongoDB,Express Js,Node Js, RestApi</p>
                    <p>
                        .<span>Tools</span> <br />
                        Git, Google Chrome, VS Code, Netlify, Heroku, Figma, Photoshop</p>
                    <a href="https://drive.google.com/uc?export=download&id=1KXbXNwwgGWzps9sJ5gemWiKAiv7lmVLt" className='btn btn-danger'><strong>Resume</strong></a>
                </div>
            </section>
        </div>
    );
};

export default About;