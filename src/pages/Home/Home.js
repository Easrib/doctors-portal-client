import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Banner2 from './Banner2';
import Contact from './Contact';
import Info from './Info';
import Makeappointment from './Makeappointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Banner2></Banner2>
            <Makeappointment></Makeappointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;