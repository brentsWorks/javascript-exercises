const leapYears = function(year) {

	// if divisible by 4
		 //if divisible by 100
		 	// if divisible by 400
				// true
		 //else (divisible by 4, not 100)
		 	// true
	if (year % 4 == 0) {

		if (year % 100 == 0) {
			if (year % 400 == 0) return true;
			else return false;
		}

		return true;
	}

	return false;

};

// Do not edit below this line
module.exports = leapYears;
