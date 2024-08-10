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
    image: "images/EZPjPf1X0AM6Qak.jpg",
  },
  {
    text1: "make a break",
    text2: "adventure starts here",
    text3: "book a stay",
    image: "images/2018-05-24.jpg",
  },
  {
    text1: "imperial serenity",
    text2: "perfect blend of eastern and western culture",
    text3: "explore more",
    image: "images/front-view-glasses-beer-with-wheat.jpg",
  },
];

let currentIndex = 0;

function updateHeroText() {
  const heroText1 = document.querySelector(".hero_text_1");
  const heroText2 = document.querySelector(".hero_text_2");
  const heroButton = document.querySelector(".hero_text_3");
  const headerImg = document.querySelector(".header_img");

  heroText1.textContent = heroData[currentIndex].text1;
  heroText2.textContent = heroData[currentIndex].text2;
  heroButton.textContent = heroData[currentIndex].text3;
  headerImg.src = heroData[currentIndex].image;

  currentIndex = (currentIndex + 1) % heroData.length;
}

setInterval(updateHeroText, 3000);

// let valueDisplays = document.querySelectorAll(".num");
// let interval = 4000;

// valueDisplays.forEach((valueDisplay) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//   let duration = math.floor(interval / endValue);
//   let counter = setInterval(function () {
//     startValue += 1;
//     valueDisplay.textContent = startValue;
//     if (startValue == endValue) {
//       clearInterval(counter);
//     }
//   }, duration);
// });

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
