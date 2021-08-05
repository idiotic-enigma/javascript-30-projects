/*	Initialise
		- initial setup for DOM element selection
		- Apply event listeners for when CSS transitions end
*/
function initialise() {
	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
};

/*	Play Sound
		- Plays sound if relevant keystroke is pressed
*/
function playSound(event) {
	const audio = document.querySelector(`audio[data-key="${event.code}"]`);
	const key = document.querySelector(`.key[data-key="${event.code}"]`);

	if(!audio || !key) { return; }
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

/*	Play Sound
		- Removes class for transition from element
*/
function removeTransition() {
	this.classList.remove('playing');
};

/*	Event Listeners */
document.addEventListener('DOMContentLoaded', initialise);
window.addEventListener('keydown', playSound);