function stripArticles(name) { return name.replace( /^(a |an |the )/i, '' ).trim(); }

function addToList(band = '') {
	if(!band) return;

	const listItem = document.createElement('li');
	listItem.textContent = band;
	bandList.appendChild(listItem);
}

const bands = ['The Plot in You','The Devil Wears Prada','Pierce the Veil','Norma Jean','The Bled','Say Anything','The Midway State','We Came as Romans','Counterparts','Oh, Sleeper','A Skylit Drive','Anywhere But Here','An Old Dog'];
const bandsSorted = bands.sort( (a, b) => stripArticles(a) > stripArticles(b) ? 1 : -1 );

const bandList = document.querySelector('#bands');

bandsSorted.forEach(band => addToList(band));

console.table(bandsSorted);