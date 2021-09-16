const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

function populateVoices() {
	voices = this.getVoices();
	const voiceOptions = voices
		.filter( voice => voice.lang.includes('en') )
		.map(voice => {
			const option = document.createElement('option');
			option.setAttribute('value', voice.name);
			option.textContent = `${voice.name} (${voice.lang})`;
			return option;
		})
	;

	voiceOptions.forEach(option => { voicesDropdown.appendChild(option); });
}

function changeVoice() {
	msg.voice = voices.find(voice => voice.name === this.value);
	toggleState();
}

function toggleState(restart = true) {
	speechSynthesis.cancel();
	if(restart) { speechSynthesis.speak(msg) };
}

function setOption() {
	msg[this.name] = this.value;
	toggleState();
}

msg.text = document.querySelector('[name="text"]').value;

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', changeVoice);
options.forEach( option => option.addEventListener('change', setOption) );
speakButton.addEventListener('click', toggleState);
stopButton.addEventListener('click', toggleState.bind(null, false));