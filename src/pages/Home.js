import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroArea from '../components/HeroArea/HeroArea';
import Achievement from '../components/Achievement/Achievement';
import Pricing from  '../components/Pricing/Pricing';

const Home = () => {
    return (
        <>
            <HeroArea />
            <Achievement/>
            <Pricing/>
            <br />           
            <Footer />
        </>
    );
};

export default Home;