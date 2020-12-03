/* Get Our Elements */
const video = document.querySelector('.video'),
      speedBar = document.querySelector('.speed-bar'),
      speedController = document.querySelector('.speed-controller'),
      minSpeed = 0.5,
      maxSpeed = 2.5;

/* Build out functions */
function chooseSpeed(e) {
  const Y = e.pageY - this.offsetTop,
        percent = Y / this.offsetHeight;
  if (percent > 1) {
    percent = 1;
  }
  const itemHeight = `${Math.round(percent * 100)}%`,
        playbackRate = percent * (maxSpeed - minSpeed) + minSpeed;
  speedController.style.height = itemHeight;
  speedController.innerHTML = `${playbackRate.toFixed(1)}x`;
}

function setSpeed(e) {
  const Y = e.pageY - this.offsetTop,
        percent = Y / this.offsetHeight,
        playbackRate = percent * (maxSpeed - minSpeed) + minSpeed;
  video.playbackRate = playbackRate;
}

function getCurrentSpeed(e) {
  const currentSpeed = video.playbackRate,
        percent = (currentSpeed - minSpeed) / (maxSpeed - minSpeed),
        itemHeight = `${Math.round(percent * 100)}%`;
  speedController.style.height = itemHeight;
  speedController.innerHTML = `${currentSpeed.toFixed(1)}x`;
}

/* Hook up the event listeners */
speedBar.addEventListener('mousemove', chooseSpeed);
speedBar.addEventListener('mousedown', setSpeed);
speedBar.addEventListener('mouseout', getCurrentSpeed);