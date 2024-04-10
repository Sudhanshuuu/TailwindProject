import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Head from './Head/Head';
import HomeSlider from './HomeSlider/HomeSlider';
import Footer from '../../components/Footer/Footer';
import ContactUs from '../../components/ContactUs/ContactUs';

function Home() {
    return (<div>
        <Navbar />
        <Head />
        <HomeSlider />
        <ContactUs />
        <Footer />
    </div>)
}

export default Home;