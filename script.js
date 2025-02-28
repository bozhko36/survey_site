let slides = document.querySelectorAll(".slide");
let index = 0;

function showNextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
    if (slides[index].tagName === "VIDEO") {
        slides[index].play();
    }
}

setInterval(showNextSlide, 3000);