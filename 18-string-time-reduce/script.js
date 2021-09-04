const timeNodes = Array.from( document.querySelectorAll('[data-time]') );

const totalSeconds = timeNodes
	.map(node => node.dataset.time)
	.map(timeCode => {
		const [min, sec] = timeCode.split(':').map(parseFloat);
		return min * 60 + sec;
	})
	.reduce( (total, seconds) => total + seconds )
;

let secondsLeft = totalSeconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, minutes, secondsLeft);

// CHALLENGE: Try to get 'total seconds' into one 'reduce' method