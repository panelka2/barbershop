import React from 'react';
import s from './about.module.css'

const firstImage = require('../assets/about/1.jpg')
const secondImage = require('../assets/about/2.jpg')
const thirdImage = require('../assets/about/3.jpg')
const table = require('../assets/about/table.jpg')

export const About = () => {
    return (
        <div className={s.block}>
            <h1 className={s.head_text}>Gentleman’s Qualities</h1>
            <hr/>
            <p className={s.about}>Представляем вашему вниманию самый масштабный и концептуально новый барбершоп в Тольятти</p>
            <div className={s.video}>
                <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/xry73O9nQlE"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
            <h2 className={s.head}>Интерьер</h2>
            <div className={s.block_about}>
                <div className={s.images_about}>
                    <img src={firstImage}/>
                    <p>Мы считаем, что цена на мужские стрижки не должна быть завышена, поэтому стоимость данной услуги в нашем барбершопе у любого мастера составляет 650₽</p>
                </div>
                <div className={s.images_about}>
                    <img src={secondImage}/>
                    <p>По настоящему брутальное пространство для джентельменов, каждая деталь интерьера соответствует нашей концепции.</p>
                </div>
                <div className={s.images_about}>
                    <img src={thirdImage}/>
                    <p>Мы не собираемся останавливаться на месте, а наоборот абсолютно всегда внедрять новые услуги, акции, продукцию и идти в ногу со временем, обучать наших мастеров новым веяниям, тенденциям и моде.</p>
                </div>
            </div>
            <div className={s.table}>
                <img src={table} />
                <p>Мы первые в городе, у кого такое большое разнообразие развлечений, пока наш клиент ожидает своей очереди или решил остаться после стрижки. Она включает в себя зону отдыха с PS4, русский бильярд, настольные игры</p>
            </div>
        </div>
    );
};
