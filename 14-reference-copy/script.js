    // start with strings, numbers and booleans
		console.groupCollapsed('Primatives - Strings, Numbers, etc.')
		let age1 = 50;
		let age2 = age1;
		console.log(age1, age2);
		age1 = 100;
		console.log(age1, age2);
		console.groupEnd('Primatives - Strings, Numbers, etc.');

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    // You might think we can just do something like this:
		const teams = players;

    // however what happens when we update that array?
    // now here is the problem!
    // oh no - we have edited the original array too!
		console.groupCollapsed('Arrays - References');
		console.dir(players, teams);

		teams[3] = 'Lucy';
		console.dir(players, teams);
		console.groupEnd('Arrays - References');
    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    // So, how do we fix this? We take a copy instead!

		players[3] = 'Poppy';
		console.groupCollapsed('Arrays - Creating Copies');

    // one way
		const teamsSplice = players.slice();
		teamsSplice[3] = 'Lucy';
		console.log("Use 'slice()' to return a clone");
		console.dir(players, teamsSplice);
	
    // or create a new array and concat the old one in
		const teamsConcat = [].concat(players);
		teamsConcat[3] = 'Lucy';
		console.log("Use 'concat()' on an empty array to duplicate contents into it");
		console.dir(players, teamsConcat);

		// or the Array 'from' method
		const teamsFrom = Array.from(players);
		teamsFrom[3] = 'Lucy';
		console.log("Use 'Array.from()' to create a new array with the content inserted");
		console.dir(players, teamsFrom);


    // or use the new ES6 Spread expression
		const teamsSpread = [...players];
		teamsSpread[3] = 'Lucy';
		console.log("Use the new ES6 'spread' expression to duplicate content into an empty array");
		console.dir(players, teamsSpread);
		console.groupEnd('Arrays - Creating Copies');

    // now when we update it, the original one isn't changed
    // The same thing goes for objects, let's say we have a person object

    // with Objects
    let person = { name: 'Wes Bos', age: 80 };

    // and think we make a copy:
    const individual = person;

		console.groupCollapsed('Objects - References');
		console.dir(person, individual);
		individual.number = '69';
		console.dir(person, individual);
		console.groupEnd('Objects - References');

		console.groupCollapsed('Objects - Creating Copies');
		person = { name: 'Wes Bos', age: 80 };

    // how do we take a copy instead?
		const individualAssign = Object.assign({}, person, {number: 99});
		console.log("Use 'Object.assign' to clone an object and add extra values without affecting the original");
		console.dir(person, individualAssign);
		console.groupEnd('Objects - Creating Copies');

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
		console.groupCollapsed('Cloning - Only one layer deep!');
		console.log('Any method of cloning will only affect a single layer, both for Arrays and Objects');
		console.log('Any nested Arrays and Objects will still be references to their original variables');
		console.log("For example, given the following where one Object is created using 'Object.assign',");
		console.log("Modification made to the 'socials' Object on the clone affects both Objects!");
		const dev = { username: 'idiotic-enigma', socials: { github: '@idiotic-enigma' } }
		const devLayers = Object.assign({}, dev, {id: 12345});
		devLayers.socials.github = '@foobar';
		console.dir(dev, devLayers);
		console.groupEnd('Cloning - Only one layer deep!');

		console.groupCollapsed("'Deep-cloning' Arrays and Objects");
		console.log('Generally, a function that iterates through all the layers of Arrays / Objects, cloning all of them, is used to deep-clone an Array / Object');
		console.log("A poor man's alternative is to use the JSON 'stringify()' and 'parse()' methods");
		console.log("This converts Arrays and Objects to Strings (which are never references), and then back again, removing all references");
		const individualJson = JSON.parse( JSON.stringify(person) );
		individualJson.age = 99;
		console.dir(person, individualJson);
		console.log('Be sure to question if there is any need for deep cloning as 1.,both of these methods likely are not well performing, and 2., likely are not necessary!');