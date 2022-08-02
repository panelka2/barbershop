import React from 'react';
import Header from "../components/Header";
import Slider from "../components/Slider";
import Price from "../components/Price";
import Masters from "../components/Masters";

const Home = () => {
    return (
        <>
            <Header/>
            <Slider/>
            <Price/>
            <Masters/>
        </>
    );
};

export default Home;