import React from 'react';
import s from './style.module.css'
import {Link} from "react-router-dom";
import classNames from "classnames";
const image = require('../../assets/masters/onMainPage.png')

export const Masters = () => {
    return (
        <div>
            <p className={s.title}><span>Наши мастера</span></p>
            <div className={s.block_img}>
                <img src={image} className={s.img}/>

            </div>
            <div className={s.button}>
                <Link className={s.link} to='/masters'>
                        <p>Подробнее</p>
                </Link>
            </div>

            <p className={classNames(s.title, s.loc)}><span>Адрес</span></p>
            <div className={s.one}><a
                href="https://yandex.ru/maps/org/gq/240718574454/?utm_medium=mapframe&utm_source=maps"
                className={s.two}>Gq</a><a
                href="https://yandex.ru/maps/240/togliatti/category/barber_shop/239628851835/?utm_medium=mapframe&utm_source=maps"
                className={s.three}>Барбершоп в Тольятти</a>
                <iframe src="https://yandex.ru/map-widget/v1/-/CCURmQSikB" width="100%" height="400" frameBorder="1"
                        ></iframe>
            </div>

            <p className={classNames(s.title, s.loc_2)}><span>Отзывы</span></p>
            <div className={s.review_block}>
                <div className={s.review_1}>
                    <iframe className={s.review_2}
                            src="https://yandex.ru/maps-reviews-widget/240718574454?comments">
                    </iframe>
                    <a href="https://yandex.ru/maps/org/gq/240718574454/"
                       target="_blank"
                       className={s.review_3}
                       >
                        Gq на карте Тольятти — Яндекс Карты
                    </a>
                </div>
            </div>
        </div>
    );
};
