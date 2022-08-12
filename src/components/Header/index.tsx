import React from 'react';
import s from './style.module.css'
import classNames from "classnames";
import {Link} from "react-router-dom";
import {routes} from '../../App'
import MobileHeader from "../MobileHeader";

const logo = require('../../assets/logo.png')
const vk = require('../../assets/vk.png')
const inst = require('../../assets/inst.png')

export const Header = () => {
    return (
        <>
            <header className={s.header}>
                <div className={s.butt_block}>
                    <Link className={classNames(s.odd, s.buttons, s.left_butt)} to={routes.home}>
                        Главная
                    </Link>
                    <Link className={classNames(s.even, s.buttons)} to={routes.masters}>
                        Мастера
                    </Link>
                    <Link className={classNames(s.odd, s.buttons)} to={routes.about}>
                        О нас
                    </Link>
                    <Link to={routes.home}>
                        <div className={s.butt_block}>
                            <img className={s.logo} src={logo}/>
                        </div>
                    </Link>
                    <Link  className={classNames(s.odd, s.buttons)} to={routes.news}>
                        Новости
                    </Link>
                    <a href="https://n390381.yclients.com/" className={classNames(s.booking)}>
                        Запись онлайн
                    </a>
                    <a href="https://vk.com/gqbarbershop">
                        <img src={vk} className={s.icons}/>
                    </a>
                    <a href="https://instagram.com/barber.gq">
                        <img src={inst} className={s.icons}/>
                    </a>
                </div>
                <MobileHeader />
            </header>
        </>
    );
};