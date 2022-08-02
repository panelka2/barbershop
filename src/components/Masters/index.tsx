import React from 'react';
import s from './style.module.css'
const image = require('../../assets/masters/onMainPage.png')

const Masters = () => {
    return (
        <div>
            <p className={s.title}><span>Наши мастера</span></p>
            <div className={s.block_img}>
                <img src={image} className={s.img}/>
            </div>
        </div>
    );
};

export default Masters;