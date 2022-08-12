import React from 'react';
import s from './news.module.css'

export const News = () => {
    return (
            <>
                <p className={s.head}>Новости</p>
                <div className={s.main}>
                    <div id="vk_groups"></div>
                </div>
                <div className={s.main_mobile}>
                    <div id="vk_groups_mob"></div>
                </div>
            </>

    );
};
