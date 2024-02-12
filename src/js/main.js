import Splide from '@splidejs/splide';
import {tabsDefaultInit} from'../js/tabs.js';
import '../scss/style.scss';

tabsDefaultInit();

const mySlider = new Splide('#mySlider', {
    perPage: 2,
    gap: '20px',
    pagination: false,
    breakpoints: {
        1024: {
            perPage: 1
        },
    }
    
});

mySlider.mount();

const mySliderNews = new Splide('#mySliderNews', {
    perPage: 4,
    gap: '20px',
    pagination: false,
    breakpoints: {
        1400: {
            perPage: 3
        },
        1024: {
            perPage: 2
        },
        768: {
            perPage: 1
        } 
    }
});

mySliderNews.mount();
