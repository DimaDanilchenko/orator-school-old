import React from 'react'
import './Promo.css';

export default function Promo() {
  return (
    <section className='promo'>
      <div className="promo__container">
        <p className="promo__title">Добро пожаловать к нам в "Бизнес Оратор"</p>
        <p className="promo__subtitle">Здесь вы будете творить свою историю и встанете на путь результата!</p>
        <p className="promo__subtitle">Мы официальная школа с государственной лицензией, что позволяет нам приводить учеников к максимальным успехам!</p>
        <p className="promo__subtitle">Остерегайтесь курсов без лицензии, не попадитесь в руки к мошенникам</p>
        <div className="promo__buttons">
          <a className="promo__button" href="#project">О проекте</a>
          <a className="promo__button" href="#techs">Технологии</a>
          <a className="promo__button" href="#about">Студент</a>
        </div>
      </div>
    </section>
  )
}
