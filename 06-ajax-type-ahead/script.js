const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

const	request = fetch(endpoint)
			.then(blob => blob.json())
			.then(data => cities.push(...data))
;

const searchInput = document.querySelector('.search');
const searchSuggests = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

function findMatches(term, cities) {

	// Check if city / state matches search term
	return cities.filter(location => {
		const regex = new RegExp(term, 'gi');
		return location.city.match(regex) || location.state.match(regex)
	});
}

function displayMatches() {
	const matches = findMatches(this.value, cities);
	const html = matches.map(location => {
		const regex = new RegExp(this.value, 'gi');
		const highlightCity = location.city.replace(regex, `<span class="hl">${this.value}</span>`);
		const highlightState = location.state.replace(regex, `<span class="hl">${this.value}</span>`);


		return `<li>
			<span class="name">${highlightCity}, ${highlightState}</span>
			<span class="population">${numberCommas(location.population)}</span>
		</li>`
		}
	).join('');


	searchSuggests.innerHTML = html;
}

function numberCommas(number) { return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }