const sliderContainer = document.querySelector(".slider-container");
const sliderItems = document.querySelectorAll(".slider-item");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 100;
  sliderContainer.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % sliderItems.length;
  updateSlider();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
  updateSlider();
});
