const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse( localStorage.getItem('items') ) || [];

function addItem(event) {
	event.preventDefault();

	const item = {
		text: this.querySelector('[name=item]').value,
		done: false
	};
	items.push(item);
	populateList(items, itemsList);
	this.reset();
}

function populateList(plates = [], plateList) {
	plateList.innerHTML = plates.map((plate, index) => {
		return `
			<li>
				<input id="item${index}" type="checkbox" data-index="${index}" ${plate.done ? 'checked' : ''}/>
				<label for="item${index}">${plate.text}</label>
			</li>`;
	}).join('');

	localStorage.setItem( 'items', JSON.stringify(items) );
}

function toggleDone(event) {
	if( !event.target.matches('input[type="checkbox"]') ) return;
	const index = event.target.dataset.index;
	items[index].done = !items[index].done;

	localStorage.setItem( 'items', JSON.stringify(items) );
	populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);

/* EXTRA CHALLENGE
	Buttons that
	- delete all items in the list
	- checks / unchecks all items in the list
*/