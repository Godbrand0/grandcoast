const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

//header container

scrollReveal().reveal(".header_container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// function myFunction(smallImg) {
//   let roomImg = document.querySelector(".room_img");
//   roomImg.src = smallImg.src;
// }
function myFunction(li) {
  let smallImg = li.querySelector("img");
  let roomImg = document.querySelector(".room_img");
  roomImg.src = smallImg.src;
}
