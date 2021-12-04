import React from 'react';
import './Banner.css';
import profile from '../../images/Profile.png';

const Banner = () => {
    return (
        <div>
            <section className='section-display'>
                <div className="half-width">
                    <h1>Md.Al-amin</h1>
                    <h3>Full-Stack Web Developer</h3>
                    <p> Experienced work with React.js, MongoDB, express, firebase, Heroku. Some projects already I make using my learning skill. Now a job internship is needed to shine my skill.</p>
                    <a href="" className='btn btn-warning'><strong>Hire Me</strong></a>
                </div>

                <div className="half-width">
                
                    
                  <img src={profile}alt="" />
                </div>
            </section>
        </div>
    );
};

export default Banner;