import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeTreeColumns from "./HomeTreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeOrganizations from "./HomeOrganizations";
import HomeContact from "./HomeContact";


const Home = () => {
    return (
        <div className="home">
            <HomeHeader />
            <HomeTreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeOrganizations />
            <HomeContact />
        </div>
    );
};

export default Home;