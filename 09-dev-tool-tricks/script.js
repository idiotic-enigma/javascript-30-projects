const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');

function makeGreen() {
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular
console.log('Hello, world!');

// Interpolated
console.log('Greetings. I am a string! %s', '👍');

// Styled
console.log('%cFunky CSS styles on console logs!', 'color:#0f0');

// warning!
console.warn('Oh no! A warning!');

// Error :|
console.error('I am like an error, but really not.');

// Info
console.info('I am like a log, just slightly fancier.');

// Testing
console.assert(p.classList.contains('cheese'), 'There is no cheese here!');

// clearing
//console.clear();

// Viewing DOM Elements
console.dir(p, 'That paragraph has all this DOM stuff.');

// Tables
console.table(dogs);

// Grouping together
dogs.forEach(dog => {
	console.groupCollapsed(dog.name);
	console.log(`This dog is named ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`That's ${dog.age * 7} dog years`);
	console.groupEnd();
});

// counting
for(let i = 0; i < 10; i++) { console.count('Repeated'); }

// timing
console.time('Fetching data');
fetch('https://api.github.com/users/idiotic-enigma')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('Fetching data');
		console.log(data);
	}
);