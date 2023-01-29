const slider = document.querySelector("#slider"),
// создаем массив из изображений
sliderItems = Array.from(slider.children),
btnNext = document.querySelector('.select-arr-right'),
btnPrev = document.querySelector('.select-arr-left'),
toggleItmes = document.querySelectorAll('.toggle'),
headButtons = document.querySelectorAll('.option'),
toggleBox = document.querySelector('.toggle-container'),
optionBox = document.querySelector('.option-list');

sliderItems.forEach(function(slide, index) {
    console.log(slide);
    // скрываем все слайды, кроме первого
    if (index !== 0) {
        slide.classList.add('hidden');
    }
    // добавляем индексы
    slide.dataset.index = index;

    // добавляем атрибут active для активного или первого слайда
    sliderItems[0].setAttribute('data-active', '')
});

// добавляем класс и индекс для активации заголовков при клике
headButtons.forEach((titleButton, index) => {
    titleButton.dataset.index = index;
    headButtons[0].classList.add('option-active');
    titleButton.addEventListener('click', function() {
        headButtons.forEach(opt => opt.classList.remove('option-active'))
        this.classList.add('option-active');
        const currentOption = optionBox.querySelector('.option-active');
        const currentOptionIndex = +currentOption.dataset.index;
        const currentSlide = slider.querySelector('[data-active]');
        currentSlide.classList.add('hidden');
        currentSlide.removeAttribute('data-active');
        // условия в зависимости от индекса кнопок
        if (currentOptionIndex == 0) {
            const nextSlide = slider.querySelector(`[data-index="${0}"]`)
            nextSlide.classList.remove('hidden');
            nextSlide.setAttribute('data-active', '');
            // добавляем класс для синхронного переключения toggles и options
            toggleItmes.forEach(opt => opt.classList.remove('toggle-active'))
            toggleItmes[0].classList.add('toggle-active');
        } else if (currentOptionIndex == 1) {
            const nextSlide = slider.querySelector(`[data-index="${1}"]`)
            nextSlide.classList.remove('hidden');
            nextSlide.setAttribute('data-active', '');
            // добавляем класс для синхронного переключения toggles и options
            toggleItmes.forEach(opt => opt.classList.remove('toggle-active'))
            toggleItmes[1].classList.add('toggle-active');
        } else if (currentOptionIndex == 2){
            const nextSlide = slider.querySelector(`[data-index="${2}"]`)
            nextSlide.classList.remove('hidden');
            nextSlide.setAttribute('data-active', '');
            // добавляем класс для синхронного переключения toggles и options
            toggleItmes.forEach(opt => opt.classList.remove('toggle-active'))
            toggleItmes[2].classList.add('toggle-active');
        }
    })
})
// добавляем класс и индекс для активации кнопок при клике. 
toggleItmes.forEach((dot, index) => {
    dot.dataset.index = index;
    toggleItmes[0].classList.add('toggle-active');

    dot.addEventListener('click', function() {
        toggleItmes.forEach(tog => tog.classList.remove('toggle-active'))
        this.classList.add('toggle-active');
        console.log('next slide');
        // скрываем текущий слайд
        const currentToggle = toggleBox.querySelector('.toggle-active');
        const currentToggleIndex = +currentToggle.dataset.index;
        const currentSlide = slider.querySelector('[data-active]');
        currentSlide.classList.add('hidden');
        currentSlide.removeAttribute('data-active');
        // условия в зависимости от индекса кнопок
        if (currentToggleIndex == 0) {
            const nextSlide = slider.querySelector(`[data-index="${0}"]`)
            nextSlide.classList.remove('hidden');
            nextSlide.setAttribute('data-active', '');
            // добавляем класс для синхронного переключения toggles и options
            headButtons.forEach(opt => opt.classList.remove('option-active'))
            headButtons[0].classList.add('option-active');
        } else if (currentToggleIndex == 1) {
            const nextSlide = slider.querySelector(`[data-index="${1}"]`)
            nextSlide.classList.remove('hidden');
            nextSlide.setAttribute('data-active', '');
            // добавляем класс для синхронного переключения toggles и options
            headButtons.forEach(opt => opt.classList.remove('option-active'))
            headButtons[1].classList.add('option-active');
        } else if (currentToggleIndex == 2){
            const nextSlide = slider.querySelector(`[data-index="${2}"]`)
            nextSlide.classList.remove('hidden');
            nextSlide.setAttribute('data-active', '')
            // добавляем класс для синхронного переключения toggles и options
            headButtons.forEach(opt => opt.classList.remove('option-active'))
            headButtons[2].classList.add('option-active');
        }
    })
})

btnNext.onclick = function () {
    console.log('next slide');
    // скрываем текущий слайд
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');
    // рассчитываем индекс следюущего слайда
    const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    // показываем следующий слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '')

    // синхронизируем кнопки в зависимости от переключения слайдов
    headButtons.forEach(opt => opt.classList.remove('option-active'))
    headButtons[nextSlideIndex].classList.add('option-active');

    toggleItmes.forEach(opt => opt.classList.remove('toggle-active'))
    toggleItmes[nextSlideIndex].classList.add('toggle-active');
}

btnPrev.onclick = function () {
    console.log('next slide');
    // скрываем текущий слайд
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');
    // рассчитываем индекс следюущего слайда
    const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    // показываем следующий слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '')

    // синхронизируем кнопки в зависимости от переключения слайдов
    headButtons.forEach(opt => opt.classList.remove('option-active'))
    headButtons[nextSlideIndex].classList.add('option-active');

    toggleItmes.forEach(opt => opt.classList.remove('toggle-active'))
    toggleItmes[nextSlideIndex].classList.add('toggle-active');
}