import React from 'react';
import s from './masters.module.css'

const vanya = require ('../assets/masters/desktopvanya.jpg')
const ivan = require ('../assets/masters/desktopivan.jpg')
const mob_vanya = require ('../assets/masters/vanya.jpg')
const mob_ivan = require ('../assets/masters/ivan.jpg')
export const Masters = () => {
    return (
        <div>
            <p className={s.text}>Мастера</p>
            <div>
                <img src={vanya} className={s.desktop_images} alt="Барбер Иван"/>
                <img src={ivan} className={s.desktop_images} alt="Барбер Иван"/>
                <img src={mob_vanya} className={s.mobile_images} alt="Барбер Иван"/>
                <img src={mob_ivan} className={s.mobile_images} alt="Барбер Иван"/>
            </div>
        </div>
    );
};
