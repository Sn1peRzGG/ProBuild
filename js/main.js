const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const buttons = document.querySelectorAll(".button");
let imageIndex = 0;
let intervalId;

const slideImage = () => {
    carousel.style.transform = `translateX(${-imageIndex * 100}%)`;
};

const startAutoSlide = () => {
    intervalId = setInterval(() => {
        imageIndex = (imageIndex + 1) % images.length;
        slideImage();
    }, 4000);
};

const stopAutoSlide = () => {
    clearInterval(intervalId);
};

const updateImageIndex = (direction) => {
    imageIndex += direction;
    if (imageIndex < 0) {
        imageIndex = images.length - 1;
    } else if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    slideImage();
};

const handleButtonClick = (e) => {
    stopAutoSlide();
    const direction = e.target.id === "next" ? 1 : -1;
    updateImageIndex(direction);
    startAutoSlide();
};

buttons.forEach((button) => button.addEventListener("click", handleButtonClick));

wrapper.addEventListener("mouseover", stopAutoSlide);
wrapper.addEventListener("mouseleave", startAutoSlide);

startAutoSlide();