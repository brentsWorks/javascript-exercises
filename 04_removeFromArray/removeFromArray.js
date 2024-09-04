const removeFromArray = function(array, ...args) {
	// remove an element from an array
	// find elements index, splice it

	const removedArray = [];

	array.forEach( (item) => {
		if (!args.includes(item)) {
			removedArray.push(item);
		}
	});
	return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
