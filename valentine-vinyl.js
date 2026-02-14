document.addEventListener('DOMContentLoaded', () => {

  const vinyl = document.querySelector("svg");
  const playButton = document.getElementById("play-button");
  const audio = document.getElementById("love-song");

  let isPlaying = false;

  playButton.addEventListener("click", () => {
    if (!isPlaying) {

      vinyl.style.animation = "spin 2s linear infinite";
      vinyl.style.transformOrigin = "center";

      audio.play();

      playButton.textContent = "Pause";
      isPlaying = true;

    } else {

      vinyl.style.animation = "";

      audio.pause();

      playButton.textContent = "Play";
      isPlaying = false;
    }
  });

});
