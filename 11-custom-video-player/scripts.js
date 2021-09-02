/* DOM Elements */
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

let mouseDown = false;

/* Functions */
function togglePlay() { video.paused ? video.play() : video.pause(); }

function updatePlayButton() { toggle.textContent = this.paused ? '►' : '❚❚'; }

function skip() { video.currentTime += parseFloat(this.dataset.skip); }

function handleRangeValue() { video[this.name] = this.value; }

function handleProgress() { progressBar.style.flexBasis = `${video.currentTime / video.duration * 100}%`; }

function scrub(event) { video.currentTime = event.offsetX / progress.offsetWidth * video.duration; }

/* Event Listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => {
	range.addEventListener('change', handleRangeValue);
	range.addEventListener('mousemove', handleRangeValue);
});

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => { if(mouseDown) scrub(event); } );
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);

/* To-Do: Fullscreen button */