const video = document.querySelector('.video'),
      speedBar = document.querySelector('.speed-bar'),
      speedController = speedBar.querySelector('.speed-controller');

function handleMove(e) {
  const y = e.pageY - this.offsetTop,
        percent = y / this.offsetHeight,
        min = 0.5,
        max = 2.5,
        height = Math.round(percent * 100) + '%',
        playbackRate = percent * (max - min) + min;
  speedController.style.height = height;
  speedController.textContent = playbackRate.toFixed(2) + '×';
  video.playbackRate = playbackRate;
}

speedBar.addEventListener('mousemove', handleMove);