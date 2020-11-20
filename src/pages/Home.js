import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroArea from '../components/HeroArea/HeroArea';
import Achievement from '../components/Achievement/Achievement';
import Pricing from '../components/Pricing/Pricing';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
import RunningProject from '../components/RunningProject/RunningProject';
import NewsLatter from '../components/NewsLatter/NewsLatter';

const Home = () => {
    return (
        <>
            <HeroArea />
            <WhatWeDo />
            <RunningProject />
            <Achievement />
            <Pricing />
            <NewsLatter />
            <Footer />
        </>
    );
};

export default Home;