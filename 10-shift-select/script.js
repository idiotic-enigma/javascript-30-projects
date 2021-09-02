/* My solution before watching challenge video

const checkboxes = Array.from( document.querySelectorAll('.item > input') );

let shiftHeld = false;
let selectionAnchor = null;
let selectionCurrent = null;

function pressShift(event) {
	if(event.key === 'Shift') shiftHeld = true;
}

function releaseShift(event) {
	if(event.key === 'Shift') shiftHeld = false;
}

function setSelection() {
	const selection = checkboxes.filter((checkbox, index) => {
		if(selectionAnchor > selectionCurrent) { return index >= selectionCurrent && index <= selectionAnchor;  }
		else { return index >= selectionAnchor && index <= selectionCurrent;  }
	});
	selection.forEach(checkbox => checkbox.checked = true);
}

window.addEventListener('keydown', pressShift);
window.addEventListener('keyup', releaseShift);
checkboxes.forEach((checkbox, index) => checkbox.addEventListener('click', () => {
	if(shiftHeld) {
		selectionCurrent = index;
		setSelection();
	}
	else { selectionAnchor = index; }
	console.log(`Anchor: ${selectionAnchor}, Current: ${selectionCurrent}`);
}));
*/

/* Provided solution */
let lastChecked = null;

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

function handleCheck(event) {
	let inBetween = false;
	/*	Two conditions must be met:
			- A 'shift' key was held down
			- Checkbox was checked, not unchecked
	*/
	if(event.shiftKey && this.checked) {
		/*	Loop through every checkbox, find all the ones within the selection range and set 'checked' to true */
		checkboxes.forEach(checkbox => {
			if(checkbox === this || checkbox === lastChecked) inBetween = !inBetween;
			if(inBetween) checkbox.checked = true;
		});
	}

	lastChecked = this;
}