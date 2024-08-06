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
