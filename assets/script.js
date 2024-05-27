const playButton = document.getElementById('next');
const backgroundMusic = document.getElementById('backgroundMusic');

playButton.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  }
});
