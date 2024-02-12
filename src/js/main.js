import Splide from '@splidejs/splide';
import {tabsDefaultInit} from'../js/tabs';
import '../scss/style.scss';

const mySlider = new Splide('#mySlider', {
    perPage: 2,
    gap: '20px',
    pagination: false,
    breakpoints: {
        1024: {
            perPage: 1
        },
        768: {
            // arrows: false,
            // pagination: true
        }
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
            perPage: 1,
            // arrows: false,
            // pagination: true
        } 
    }
});

mySliderNews.mount();
tabsDefaultInit();
