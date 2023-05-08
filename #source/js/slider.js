let { sliders, imageCount, images } = slider();

function slider() {

    let sliders = document.querySelectorAll('.slider'); //Ищет все слайдеры в массив
    let imageCount = [];
    let images = [];
 
    // for each slider on a page
    for (let i = 0; i < sliders.length; i++) {

        // Инициализирует каждый слайдер
        imageCount[i] = 0;
        let imagesTmp = sliders[i].querySelectorAll('.slider__container>*');
        images[i] = imagesTmp.length;

        // Слушаем кнопки
        sliders[i].querySelector('.slider__button_next').addEventListener('click', function () {
            imageCount[i]++;
            rollSlider(i);
        });
        sliders[i].querySelector('.slider__button_prev').addEventListener('click', function () {
            imageCount[i]--;
            rollSlider(i);
        });

        // Swipe
        sliders[i].addEventListener('touchstart', handleTouchStart, false);
        sliders[i].addEventListener('touchmove', handleTouchMove, false);
        sliders[i].addEventListener('touchend', handleTouchEnd, false);
        let x1 = null;
        let x2 = null;

        function handleTouchStart(event) {
            x1 = event.touches[0].clientX;
        }

        function handleTouchMove(event) {
            x2 = event.touches[0].clientX;
        }

        function handleTouchEnd() {
            if (x1 - x2 > 50 & x2 != null) {
                imageCount[i]++;
            }
            if (x1 - x2 < -50) {
                imageCount[i]--;
            }
            rollSlider(i);

            x1 = null;
            x2 = null;
        }

        window. onload = function() {
            for (let i = 0; i < sliders.length; i++) {
                rollSlider(i);
            }
        }
    }
    return { sliders, imageCount, images };
}

function rollSlider(i){
    let sliderContainer = sliders[i].querySelector('.slider__container');
    let width; // Для одной картинки
    width = sliders[i].querySelector('.slider__window').offsetWidth;

    if (imageCount[i] >= images[i]) {
        imageCount[i] = 0;
    }

    if (imageCount[i] < 0){
        imageCount[i] = images[i] - 1;
    }

    sliderContainer.style.transform = 'translate(-' + imageCount[i] * width + 'px)';

    // Arrow buttons position height
    let height;
    height = sliderContainer.offsetHeight;
    let sliderButton = sliders[i].querySelector('.slider__button');
    let sliderButtonPrev = sliders[i].querySelector('.slider__button .slider__button_prev');
    let sliderButtonNext = sliders[i].querySelector('.slider__button .slider__button_next');

    if (sliderButton != null) {
        sliderButtonPrev.style.height = ' ' + width/10 + 'px'; //10vw
        sliderButtonPrev.style.bottom = ' ' + (height/2 + width/20) + 'px'; //40vw

        sliderButtonNext.style.height = ' ' + width/10 + 'px'; //10vw 
        sliderButtonNext.style.bottom = ' ' + (height/2 + width/20) + 'px'; //40vw
    }
};

resize();

function resize() {
    window.addEventListener('resize', function () {
        for (let i = 0; i < sliders.length; i++) {
            rollSlider(i);
        }
    });
}
