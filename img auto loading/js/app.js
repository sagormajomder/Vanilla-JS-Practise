let intervalID;
const img = document.querySelector("img");

window.onload = () => {
  mainFunction();
};

const imgReload = function () {
  if (!intervalID) {
    let imgCount = 1;
    intervalID = setInterval(() => {
      if (imgCount > 5) {
        imgCount = 1;
      }
      img.src = `./img/p${imgCount}.jpg`;
      imgCount++;
    }, 500);
  }
};

const imgStop = function () {
  clearInterval(intervalID);
  intervalID = null;
};
const mainFunction = function () {
  const startButton = document.querySelector(".start");
  const stopButton = document.querySelector(".stop");
  startButton.addEventListener("click", imgReload);
  stopButton.addEventListener("click", imgStop);
};
