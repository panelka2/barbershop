import React from 'react';
import s from './style.module.css'
import classNames from "classnames";
import {Link} from "react-router-dom";
const vk = require('../../assets/vk.png')
const inst = require('../../assets/inst.png')

export const Contacts = () => {
    return (
        <div className={s.block_contacts}>
            <div className={s.block_txt}>
                <p className={s.contacts}>Контакты</p>
                <h3 className={s.description}>г.Тольятти ул.дзержинского 35д</h3>
                <h3 className={s.description}>Тел: +7 (960) 843-39-51</h3>
                <a href="https://vk.com/gqbarbershop">
                    <img src={vk} className={s.icons}/>
                </a>
                <a href="https://instagram.com/barber.gq">
                    <img src={inst} className={s.icons}/>
                </a>
            </div>
            <hr className={s.hr_style}/>
            <div className={s.navi_footer}>
                <Link className={s.butt} to="/">Главная</Link>
                <Link className={s.butt} to="/masters">Мастера</Link>
                <Link className={s.butt} to="/">О нас</Link>
                <Link className={s.butt} to="/">Новости</Link>
                <Link className={classNames(s.butt,)} to="/"><p className={classNames(s.link)}>Запись онлайн</p></Link>
            </div>
        </div>
    );
};
