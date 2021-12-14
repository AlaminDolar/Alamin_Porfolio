import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Navigation from '../Header/Navigation';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation> 
           <Banner></Banner>
           <About></About>
        </div>
    );
};

export default Home;
