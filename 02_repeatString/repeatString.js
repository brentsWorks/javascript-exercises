const repeatString = function(phrase, reps) {
	if (reps < 0) return "ERROR";
	let string = "";
	for (let i=0; i < reps; ++i) {
		string += phrase;
	}
	return string;
};

// Do not edit below this line
module.exports = repeatString;
