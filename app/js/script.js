const burger = document.getElementsByClassName('burger__btn')[0];
const left_nav = document.getElementsByClassName('left__nav')[0];
burger.onclick = function () {
    left_nav.classList.toggle('active');
};

let currentImage = "image1";

function changeImage(imageId) {
  const imageElement = document.getElementById(imageId);

  if (currentImage === imageId) {
    return;
  }

  imageElement.src = "img/line-chart-check.svg";
  const previousImageElement = document.getElementById(currentImage);
  previousImageElement.src = "img/line-chart-not-check.svg";
  currentImage = imageId;
  
}