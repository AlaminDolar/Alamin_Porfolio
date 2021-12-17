import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Navigation from '../Header/Navigation';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation> 
           <Banner></Banner>
           <About></About>
           <Projects></Projects>
           <Blogs></Blogs>
           <Contact></Contact>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;
