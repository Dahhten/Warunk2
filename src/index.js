// DECLARE




// LOGIN

console.log(button);

// Slider


const goToSlide = (index) => {
    currentIndex = (index + slideCount) % slideCount;
    slider.style.transform = `translateX(-${currentIndex * 20}%)`;
    updateDots();
};

const updateDots = () => {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
};

nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));
prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
});

setInterval(() => goToSlide(currentIndex + 1), interval);

