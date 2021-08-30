// ## Array Cardio Day 2

const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 }
];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
const someNineteen = people.some(person =>
	new Date().getFullYear() - person.year >= 19
); 

const everyNineteen = people.every(person =>
	new Date().getFullYear() - person.year >= 19
); 

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const commentId = comments.find(comment => comment.id === 823423);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentsModded = modifyComments();

function modifyComments() {
	const index = comments.findIndex(comment => comment.id === 823423);
	return [
		...comments.splice(0, index),
		...comments.splice(index + 1)
	];
}

console.log({someNineteen});
console.log({everyNineteen});
console.log(commentId);
console.table(commentsModded);