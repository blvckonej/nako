import Splide from '@splidejs/splide';
import {tabsDefaultInit} from'../js/tabs.js';
import '../scss/style.scss';

tabsDefaultInit();

const sliderOne = document.getElementById('mySlider');
const sliderTwo = document.getElementById('mySliderNews');
const sliderThree = document.getElementById('mySliderPersonal');
const sliderFour = document.getElementById('mySliderDocuments');

if (sliderOne) {
    const mySlider = new Splide('#mySlider', {
        perPage: 2,
        gap: '20px',
        pagination: false,
        breakpoints: {
            1024: {
                perPage: 1
            },
        },
        
    });
    
    mySlider.mount();
}

if (sliderTwo) {
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
}

if (sliderThree) {
    const mySliderPersonal = new Splide('#mySliderPersonal', {
        perPage: 4,
        gap: '33px',
        height: '525px',
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

    mySliderPersonal.mount();
}

if (sliderFour) {
    const mySliderDocuments = new Splide('#mySliderDocuments', {
        perPage: 4,
        gap: '33px',
        height: '525px',
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

    mySliderDocuments.mount();
}