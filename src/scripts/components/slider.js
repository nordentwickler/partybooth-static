
import { tns } from 'tiny-slider/src/tiny-slider.module';

/** Slider **/

const sliderContainer = document.getElementsByClassName('slider-container');

if (sliderContainer.length){
    for (const slider of sliderContainer) {

        const tinyslider = tns({
            container: slider.querySelector('.slider'),
            items: 1,
            controls: false,
            nav:true,
            navPosition: 'bottom',
        });

    }
}

const testimonialSlider = document.getElementsByClassName('testimonial-slider-container');

if (testimonialSlider.length){
    for (const slider of testimonialSlider) {


        const tinyslider = tns({
            container: slider.querySelector('.testimonial-slider'),
            items:1,
            controls:false,
            nav:true,
            navPosition: 'bottom',
            responsive: {
                768: {
                    items:1,
                    center: true,
                    gutter: 32,
                }

            }
        });



    }
}
