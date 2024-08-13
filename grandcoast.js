//reciews container
function myFunction(li) {
  let smallImg = li.querySelector("img");
  let roomImg = document.querySelector(".room_img");
  roomImg.src = smallImg.src;
}

document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack = document.querySelector(".slider-track");
  const reviewBoxes = Array.from(sliderTrack.children);

  // Duplicate the review boxes to create an infinite effect
  reviewBoxes.forEach((box) => {
    const clone = box.cloneNode(true);
    sliderTrack.appendChild(clone);
  });
});

// menu and sidebar
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".side-bar");

menu.addEventListener("click", () => {
  sidebar.classList.add("active");
});
close.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

//loader animation
const loaderImg = document.querySelector(".loader_bg");
setTimeout(function () {
  loaderImg.classList.toggle("hidden");
}, 3000);

//header-box animation
let boxes = document.querySelectorAll("header .header_texts");
let currentIndex = 0;
let intervalTime = 4000;

function iterateBoxes() {
  boxes.forEach((box) => box.classList.remove("true"));

  boxes[currentIndex].classList.add("true");

  currentIndex++;

  if (currentIndex >= boxes.length) {
    currentIndex = 0;
  }
}
const header = document.querySelector("header");

header.addEventListener("mouseover", () => {
  header.style.animationPlayState = "paused";
});

header.addEventListener("mouseout", () => {
  header.style.animationPlayState = "running";
});

// number counter
setInterval(iterateBoxes, intervalTime);

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);

  // Ensure duration is at least 1ms to avoid an infinite loop.
  duration = Math.max(duration, 1);

  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});
