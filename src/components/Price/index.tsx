import React from 'react';
import s from './style.module.css'
import classNames from "classnames";

export const Price = () => {
    return (
        <>
        <div className={s.main_block}>
            <div className={s.block_content}>
                <div className={s.title}>
                    <div className={s.text_title}>
                        <p>Основной прайс</p>
                    </div>
                </div>
                <div className={s.prices}>
                    <p><span>Мужская стрижка</span><span>900₽</span></p>
                    <p><span>Стрижка машинкой (одна,две насадки)</span><span>400₽</span></p>
                    <p><span>Стрижка машинкой + фейд</span><span>750₽</span></p>
                    <p><span>Стрижка бороды и усов</span><span>450₽</span></p>
                    <p><span>Стрижка и оформление бороды</span><span>1200₽</span></p>
                    <p><span>Детская стрижка</span><span>600₽</span></p>
                    <p><span>Отец + сын</span><span>1300₽</span></p>
                    <p><span>Отец + два сына</span><span>1900₽</span></p>
                    <p><span>Укладка</span><span>350₽</span></p>
                    <p><span>Воск (уши, брови, нос)</span><span>250₽</span></p>
                </div>

                <div className={classNames(s.title, s.margin_titles)}>
                    <div className={s.text_title}>
                        <p>Подарочные наборы</p>
                    </div>
                </div>
                <div className={s.prices}>
                    <p><span>Набор (кейс + гребень)</span><span>700₽</span></p>
                    <p><span>Набор (кейс + гребень + сертификат 2500)</span><span>3000₽</span></p>
                </div>

                <div className={classNames(s.title, s.margin_titles)}>
                    <div className={s.text_title}>
                        <p>Аренда помещения</p>
                    </div>
                </div>
                <div className={s.prices}>
                    <p><span>В будние дни для фото/видеосъемки (1час)</span><span>1500₽</span></p>
                    <p><span>В выходные для фото/видеосъемки (1час)</span><span>2500₽</span></p>
                </div>

                <div className={s.last_text}>
                    <p><span className={s.first_span}>В GQ вы можете приобрести мужскую уходовую косметику</span>
                        <span>Наличие и стоимость уточняйте у администратора</span></p>
                </div>
            </div>
        </div>
        <hr className={s.hr_width}/>
        </>
    );
};