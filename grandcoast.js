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

const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".side-bar");

menu.addEventListener("click", () => {
  sidebar.classList.add("active");
});
close.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

let heroData = [
  {
    text1: "enjoy your day",
    text2: "elegant capturing",
    text3: "experience it",
    image:
      "images/10816199_bee272a1bf134798be07b4215f872027_jpeg_jpege6851475d93476a9c34804a78a9dd435.jpg",
  },
  {
    text1: "make a break",
    text2: "adventure starts here",
    text3: "book a stay",
    image: "images/full-shot-man-carrying-baggage.jpg",
  },
  {
    text1: "imperial serenity",
    text2: "perfect blend of eastern and western culture",
    text3: "explore more",
    image: "images/front-view-glasses-beer-with-wheat.jpg",
  },
];

let boxes = document.querySelectorAll("header .header_texts");
let currentIndex = 0;
let intervalTime = 4000; // 2 seconds interval

function iterateBoxes() {
  // Clear any previous active classes
  boxes.forEach((box) => box.classList.remove("true"));

  // Add active class to the current box
  boxes[currentIndex].classList.add("true");

  // Move to the next box
  currentIndex++;

  // If we reach the end of the boxes, reset to the first one
  if (currentIndex >= boxes.length) {
    currentIndex = 0;
  }
}

// Start the iteration
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
