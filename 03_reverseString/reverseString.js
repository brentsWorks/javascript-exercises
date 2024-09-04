const reverseString = function(string) {
	string = string.split(""); // split into char array
	
	string = string.reverse(); // reverse array (string)
	string = string.join(""); // join reversed char array back
	return string;
};

// Do not edit below this line
module.exports = reverseString;
