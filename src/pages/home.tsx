import React from 'react';
import {Slider} from "../components/Slider";
import {Price} from "../components/Price";
import {Masters} from "../components/Masters";

export const Home = () => {
    return (
        <>
            <Slider/>
            <Price/>
            <Masters/>
        </>
    );
};
