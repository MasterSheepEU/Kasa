import React from 'react';
import Navigation from '../components/Navigation';
import HomeBanner from '../components/HomeBanner';
import Footers from '../components/Footers';
import Cards from '../components/Cards';



const Home = () => {
    return (
        <>
            <Navigation />
            <HomeBanner />
            <Cards />
            <Footers />
        </>
    );

};

export default Home;