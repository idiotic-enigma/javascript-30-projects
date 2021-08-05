const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function getDate() {
	const date = new Date();
	const seconds = date.getSeconds();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const secondsDegrees = (seconds / 60) * 360;
	const minutesDegrees = (minutes / 60) * 360;
	const hoursDegrees = (hours / 12) * 360;

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	console.log(hours);
}

setInterval(getDate, 1000);