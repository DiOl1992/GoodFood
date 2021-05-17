import  tabs   from './modules/tabs';
import  modal  from './modules/modal';
import  timer  from './modules/timer';
import  cards  from './modules/cards';
import  calc   from './modules/cals';
import  forms  from './modules/forms';
import  slider from './modules/slider';
import {showModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    //Щоб модальне вікно відчинялолся через 10 секунд!
    const modalTimer = setInterval(() => showModal('.modal', modalTimer), 10000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimer);
    timer('.timer', '2021-06-11');
    cards();
    calc();
    forms('form', modalTimer);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCaunter: '#total',
        carentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'


    });   


});