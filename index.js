let URL_BASE = "./images/Animacion_Celular_";
let currentImg = 0;
let previousY = 0;

document.addEventListener("scroll", function () {
  const img = document.getElementById("img");
  if (isDownScroll() && currentImg < 103) {
    currentImg++;
  } else {
    if (currentImg > 0) {
      currentImg--;
    }
  }
  img.src = URL_BASE + getImgId(currentImg) + ".png";
  if (window.scrollY > 1000) {
    img.style.position = "static";
  } else {
    img.style.position = "fixed";
  }
});

function isDownScroll() {
  let currentY = window.scrollY;
  isScrollDown = currentY > previousY;
  previousY = currentY;
  return isScrollDown;
}

function getImgId(currentImg) {
  for (let i = currentImg.toString().length; i < 5; i++) {
    currentImg = "0" + currentImg;
  }
  return currentImg;
}
