import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Navigation from '../Header/Navigation';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation> 
           <Banner></Banner>
           <About></About>
           <Projects></Projects>
        </div>
    );
};

export default Home;
