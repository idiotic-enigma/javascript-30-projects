const secretCode = 'themilkman';
const pressed = [];

function updatePressed(event) {
	pressed.push(event.key);
	pressed.splice(
		-secretCode.length - 1,
		pressed.length - secretCode.length
	);
	console.log(pressed);
}

function matchesCode() { return pressed.join('').includes(secretCode) }

window.addEventListener('keyup', (event) => {
	updatePressed(event);
	if( matchesCode() ) {
		console.log('Congrats! You cracked the code!');
		cornify_add();
	};
});