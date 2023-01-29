"use strict";
window.onload = () => {
  mainFunction();
};
const mainFunction = function () {
  const img = document.querySelector("img");
  const blurImg = document.querySelector(".b");
  const blackAndWhiteImg = document.querySelector(".bnw");
  const gradientImg = document.querySelector(".grad");
  const sepiaImg = document.querySelector(".sep");
  const resetImg = document.querySelector(".res");
  blurImg.addEventListener("click", function () {
    img.classList.add("blur");
    img.classList.remove("black-and-white");
    img.classList.remove("sepia");
    img.classList.remove("gradient");
  });
  blackAndWhiteImg.addEventListener("click", function (e) {
    img.classList.add("black-and-white");
    img.classList.remove("sepia");
    img.classList.remove("gradient");
    img.classList.remove("blur");
  });
  sepiaImg.addEventListener("click", function () {
    img.classList.add("sepia");
    img.classList.remove("gradient");
    img.classList.remove("blur");
    img.classList.remove("black-and-white");
  });
  gradientImg.addEventListener("click", function () {
    img.classList.add("gradient");
    img.classList.remove("black-and-white");
    img.classList.remove("sepia");
    img.classList.remove("blur");
  });
  // const buttons = document.querySelector(".buttons");
  // buttons.addEventListener("click", function (e) {
  //   img.classList.add(e.target.id);
  // });
  const reset = function () {
    img.classList.remove("blur");
    img.classList.remove("black-and-white");
    img.classList.remove("sepia");
    img.classList.remove("gradient");
  };
  resetImg.addEventListener("click", reset);
};
