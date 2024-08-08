
let { sliders, selectedElementNumber, elementsCount } = initializeSlider();

function initializeSlider() {

    let sliders = document.querySelectorAll('.slider'); // Массив всех слайдеров на странице
    let selectedElementNumber = []; // [Номер cлайдера] = Номер выбранного элеменна слайдера
    let elementsCount = []; // [Номер cлайдера] = Количество элементов слайдера

    // for each slider on a page
    for (let i = 0; i < sliders.length; i++) {

        let sliderElements = sliders[i].querySelectorAll('.slider__container>*'); // Массив элементов слайдера

        // Заполнение массивов
        selectedElementNumber[i] = 0;
        elementsCount[i] = sliderElements.length; // Количество элементов слайдера

        // Слушаем кнопки
        sliders[i].querySelector('.slider__button_next').addEventListener('click', function () {
            selectedElementNumber[i]++;
            rollSlider(i);
        });
        sliders[i].querySelector('.slider__button_prev').addEventListener('click', function () {
            selectedElementNumber[i]--;
            rollSlider(i);
        });

        // Swipe
        handleSwipe();
        function handleSwipe() {
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
                    selectedElementNumber[i]++;
                }
                if (x1 - x2 < -50) {
                    selectedElementNumber[i]--;
                }
                rollSlider(i);

                x1 = null;
                x2 = null;
            }
        }
    }

    // После загрузки - для каждого слайдера
    window.onload = function () {
        for (let i = 0; i < sliders.length; i++) {
            rollSlider(i);
        }
    }

    return { sliders, selectedElementNumber, elementsCount };
}

function rollSlider(i) {
    let sliderContainer = sliders[i].querySelector('.slider__container');
    let width; // Для одной картинки
    width = sliders[i].querySelector('.slider__window').offsetWidth;

    if (selectedElementNumber[i] >= elementsCount[i]) {
        selectedElementNumber[i] = 0;
    }

    if (selectedElementNumber[i] < 0) {
        selectedElementNumber[i] = elementsCount[i] - 1;
    }

    sliderContainer.style.transform = 'translate(-' + selectedElementNumber[i] * width + 'px)';

    // Arrow buttons position height
    setSliderButtonsPosition(i);

    fitSelectedElementHeight(i);
};

resize();

// When screen resize
function resize() {
    window.addEventListener('resize', function () {
        for (let i = 0; i < sliders.length; i++) {
            rollSlider(i);
        }
    });
}

function setSliderButtonsPosition(i) {
    let width; // Для одной картинки
    let height;
    let sliderElements = sliders[i].querySelectorAll('.slider__container>*'); // Массив элементов слайдера
    let elementNumber = selectedElementNumber[i];
    let elementHeight = sliderElements[elementNumber].offsetHeight;

    let sliderButton = sliders[i].querySelector('.slider__button');
    let sliderButtonPrev = sliders[i].querySelector('.slider__button .slider__button_prev');
    let sliderButtonNext = sliders[i].querySelector('.slider__button .slider__button_next');

    width = sliders[i].querySelector('.slider__window').offsetWidth;
    height = elementHeight;

    if (sliderButton != null) {
        sliderButtonPrev.style.height = ' ' + width / 10 + 'px'; //10vw
        sliderButtonPrev.style.bottom = ' ' + (height / 2 + width / 20) + 'px'; //40vw

        sliderButtonNext.style.height = ' ' + width / 10 + 'px'; //10vw 
        sliderButtonNext.style.bottom = ' ' + (height / 2 + width / 20) + 'px'; //40vw
    }
}

function fitSelectedElementHeight(sliderNumber) {
    let sliderElements = sliders[sliderNumber].querySelectorAll('.slider__container>*'); // Массив элементов слайдера
    let sliderContainer = sliders[sliderNumber].querySelector('.slider__container');
    let elementNumber = selectedElementNumber[sliderNumber];
    let elementHeight = sliderElements[elementNumber].offsetHeight;

    sliderContainer.style.height = elementHeight + 'px';
}
