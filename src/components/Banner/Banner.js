import React from 'react';

import background from '../../images/background/Profile.jpg';
import  './Banner.css';


const Banner = () => {
    return (
        <div>
          <section className="background panda-bg">
        
              
                  <div className="row p-3 d-flex align-items-center">
                      <div className="col-lg-7">
                          <h1>Cool Dude Headphone
                        </h1>
                        <p>This is the best headphone in the world for people who just want to waste time in front of funky world.
    
                        </p>
                        <h1>$420</h1>
                        <button className="btn btn-warning">
                            By Now
                        </button>
    
                      </div>
                      <div className="col-lg-5">
                        <img src={background} className="d-block w-50" alt="..."/>
                      </div>
                  </div>
             
             
      </section>
        </div>
    );
};

export default Banner;