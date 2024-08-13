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
let intervalId;
let isMouseOver = false; // Flag to track if the mouse is over the header

function iterateBoxes() {
  boxes.forEach((box) => box.classList.remove("true"));

  boxes[currentIndex].classList.add("true");

  // Increment currentIndex only if the mouse is not over the header
  if (!isMouseOver) {
    currentIndex++;
  }

  if (currentIndex >= boxes.length) {
    currentIndex = 0;
  }
}

function startInterval() {
  intervalId = setInterval(iterateBoxes, intervalTime);
}

function stopInterval() {
  clearInterval(intervalId);
}

// Start the interval initially
startInterval();

// Get the header element
const header = document.querySelector("header");

// Set isMouseOver to true when hovering
header.addEventListener("mouseover", () => {
  isMouseOver = true;
  stopInterval(); // Optional: Stop the interval when hovering
});

// Set isMouseOver to false when mouse leaves
header.addEventListener("mouseout", () => {
  isMouseOver = false;
  startInterval(); // Optional: Resume the interval when the mouse leaves
});

// number counter
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
