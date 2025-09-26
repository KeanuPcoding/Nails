// Grab elements
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const volumeSlider = document.getElementById("volumeSlider");
const nailMusic = document.getElementById("nailMusic");
const nowPlaying = document.getElementById("nowPlaying");

// Play button
playBtn.addEventListener("click", () => {
  nailMusic.play()
    .then(() => {
      nowPlaying.classList.remove("hidden");
    })
    .catch(err => console.log("Autoplay blocked:", err));
});

// Pause button
pauseBtn.addEventListener("click", () => {
  nailMusic.pause();
  nowPlaying.classList.add("hidden");
});

// Volume control
volumeSlider.addEventListener("input", () => {
  nailMusic.volume = volumeSlider.value;
});
