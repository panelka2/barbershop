import React from 'react';
import {FiMenu} from "react-icons/fi"
import {IoMdClose} from "react-icons/io"
import s from './style.module.css'
import {useState} from "react";
import {Link} from "react-router-dom";
import {routes} from "../../App";
import {motion} from "framer-motion";

const logo = require('../../assets/logo.png')
const vk = require('../../assets/vk.png')
const inst = require('../../assets/inst.png')

const MobileHeader = () => {

    const [open, setOpen] = useState(false);

    const burgerIcon = <FiMenu className={s.burger}
                           size='40px' color='white'
                           onClick={() => setOpen(!open)}
    />
    const closeIcon = <IoMdClose className={s.burger}
                           size='40px' color='white'
                           onClick={() => setOpen(!open)}
    />
    const closeMobileMenu = () => setOpen(false);
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    return (

        <div className={s.header}>
            <Link to={routes.home}>
                <div className={s.butt_block}>
                    <img className={s.logo} src={logo}/>
                </div>
            </Link>
            <a href="https://vk.com/gqbarbershop">
                <img src={vk} className={s.icons}/>
            </a>
            <a href="https://instagram.com/barber.gq">
                <img src={inst} className={s.icons}/>
            </a>

            {open ? closeIcon : burgerIcon}
            {open &&
                <div className={s.downPanel}>
                    <a href="https://n390381.yclients.com/" className={s.text_button} >
                        <motion.span
                            className={s.buttons_ycl}
                            initial={animateFrom}
                            animate={animateTo}
                            transition={{delay: 0.05}}
                            onClick={() => closeMobileMenu()}>
                                    <p>Запись онлайн</p>
                        </motion.span>
                    </a>
                    <Link to={routes.home} className={s.text_button}>
                        <motion.span
                            className={s.buttons}
                            initial={animateFrom}
                            animate={animateTo}
                            transition={{delay: 0.10}}
                            onClick={() => closeMobileMenu()}>
                                <p>Главная</p>
                        </motion.span>
                    </Link>
                    <Link to={routes.masters}  className={s.text_button}>
                        <motion.span
                            className={s.buttons}
                            initial={animateFrom}
                            animate={animateTo}
                            transition={{delay: 0.20}}
                            onClick={() => closeMobileMenu()}>
                                <p>Мастера</p>
                        </motion.span>
                    </Link>
                    <Link to={routes.about}  className={s.text_button}>
                        <motion.span
                            className={s.buttons}
                            initial={animateFrom}
                            animate={animateTo}
                            transition={{delay: 0.30}}
                            onClick={() => closeMobileMenu()}>
                                <p>О нас</p>
                        </motion.span>
                    </Link>
                    <Link to={routes.news}  className={s.text_button}>
                        <motion.span
                            className={s.buttons}
                            initial={animateFrom}
                            animate={animateTo}
                            transition={{delay: 0.40}}
                            onClick={() => closeMobileMenu()}>
                                <p>Новости</p>
                        </motion.span>
                    </Link>
                </div>
            }
        </div>
    );
};

export default MobileHeader;