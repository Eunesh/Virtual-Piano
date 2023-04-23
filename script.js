const whiteKeys = document.querySelectorAll(".key-white");
const blackKeys = document.querySelectorAll(".key-black");
// volumeSlider = document.querySelector(".volume-slider input");
// console.log(volumeSlider);

let audio = new Audio("tunes/a.wav");

const playtune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play(); // Playing audio
};

whiteKeys.forEach((key) => {
  // calling plaTune function with passing data-key value as an argument
  key.addEventListener("click", () => playtune(key.dataset.key));
});

blackKeys.forEach((key) => {
  // calling plaTune function with passing data-key value as an argument
  key.addEventListener("click", () => playtune(key.dataset.key));
});

const pressedkey = (e) => {
  playtune(e.key);
};

// const handleVolume = (e) => {
//   audio.volume = e.target.value;
// };

document.addEventListener("keydown", pressedkey);
// volumeSlider.addEventListener("input", handleVolume);
