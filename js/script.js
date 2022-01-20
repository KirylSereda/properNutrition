import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import {modalOpen} from './modules/modal'

window.addEventListener('DOMContentLoaded', () => {

    const ModalTimerId = setTimeout(() => modalOpen('.modal', ModalTimerId), 2000);

    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active')
    modal('[data-modul]', '.modal', ModalTimerId)
    timer('2022-06-12')
    calc()
    cards()
    forms('form',ModalTimerId)
    slider({
        container:'.offer__slide',
        slide:'.offer__slide',
        nextArrow:'.offer__slider-next',
        prevArrow:'.offer__slider-prev',
        totalCounter:'#total',
        currentCounter:'#current',
        wrapper:'.offer__slider-wrapper',
        field:'.offer__slider-inner'
    })

});
