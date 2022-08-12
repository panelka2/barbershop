import React from 'react';
import { Link } from 'react-router-dom';
import {routes} from "../App";
import s from './page404.module.css'
export const Page404 = () => {
    return (
        <div className={s.block}>
            <h1>Такой страницы нет</h1>
            <Link to={routes.home}>На главную</Link>
        </div>
    );
};
