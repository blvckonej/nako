import Splide from '@splidejs/splide';
import {tabsDefaultInit} from'../js/tabs.js';
import '../scss/style.scss';

tabsDefaultInit();

const sliderOne = document.getElementById('mySlider');
const sliderTwo = document.getElementById('mySliderNews');
const sliderThree = document.getElementById('mySliderPersonal');
const sliderFour = document.getElementById('mySliderDocuments');
const carousel = document.getElementById('main-carousel');
const modalWindow = document.querySelector('.header__modal');


// Burger
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('burgers').addEventListener('click', function() {
        document.querySelector('.burger').classList.toggle('burger__open');
    })
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelector('.burger').classList.remove('burger__open');
    }
});

document.getElementById("burgers_menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burgers").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    // Действие при клике
    document.querySelector(".burger").classList.remove("burger__open")
});

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
        // gap: '33px',
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

if(carousel) {
    const splide = new Splide( '#main-carousel', {
        pagination: false,
        arrows: false,
      } );
      
      var thumbnails = document.getElementsByClassName( 'thumbnail' );
        var current;

        for ( var i = 0; i < thumbnails.length; i++ ) {
        initThumbnail( thumbnails[ i ], i );
        }

        function initThumbnail( thumbnail, index ) {
        thumbnail.addEventListener( 'click', function () {
            splide.go( index );
        } );
        }

        splide.on( 'mounted move', function () {
        var thumbnail = thumbnails[ splide.index ];

        if ( thumbnail ) {
            if ( current ) {
            current.classList.remove( 'is-active' );
            }

            thumbnail.classList.add( 'is-active' );
            current = thumbnail;
        }
        } );

      splide.mount();
}

// if(modalWindow) {
//     setTimeout(function(){  
//         const modalwin = modalWindow;
//         modalwin.style.display="block";  
//         document.querySelector(".header__modal-close").addEventListener("click", function(){
//         modalwin.style.display="none";  
//         });
//       }, 60000);
// }