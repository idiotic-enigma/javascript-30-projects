const hero = document.querySelector('.hero');
const h1 = document.querySelector('h1');
const threshold = 50;

function shadow(event) {
	const { offsetWidth: width, offsetHeight: height } = hero;
	let { offsetX: x, offsetY: y } = event;

	if(this !== event.target) {
		x += event.target.offsetLeft;
		y += event.target.offsetTop;
	}

	/*	Breaking this down:
			- 'x / width' = How far from the left 'x' was as a decimal
			- Times by 'threshold'
			- Then minused by half of 'threshold' to get an offset from 0
	*/
	const limitX = Math.round( (x / width * threshold) - threshold / 2 );
	const limitY = Math.round( (y / width * threshold) - threshold / 2 );

	h1.style.textShadow = `${limitX}px ${limitY}px 0 rgba(0,0,0,.25)`;
}

hero.addEventListener('mousemove', shadow);