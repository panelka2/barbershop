import React from 'react';
import s from './style.module.css'
import classNames from "classnames";
import {Link} from "react-router-dom";
const logo = require('../../assets/logo.png')
const vk = require('../../assets/vk.png')
const inst = require('../../assets/inst.png')

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.butt_block}>
                <Link className={classNames(s.odd, s.buttons, s.left_butt)} to='/'>
                    <div>Главная</div>
                </Link>
                <Link className={classNames(s.even, s.buttons)} to='/masters'>
                    <div>Мастера</div>
                </Link>
                <Link className={classNames(s.odd, s.buttons)} to='/'>
                    <div>О нас</div>
                </Link>
                <div className={s.butt_block}>
                    <img className={s.logo} src={logo}/>
                </div>
                <a className={classNames(s.odd, s.buttons)}>
                    <div>Новости</div>
                </a>
                <a className={classNames(s.booking)}>
                    Запись онлайн
                </a>
                <a href="https://vk.com/gqbarbershop">
                    <img src={vk} className={s.icons}/>
                </a>
                <a href="https://instagram.com/barber.gq">
                    <img src={inst} className={s.icons}/>
                </a>
            </div>
        </header>
    );
};

export default Header;