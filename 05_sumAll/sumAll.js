const sumAll = function(int1, int2) {
	if (int1 <= 0 || int2 <= 0) return "ERROR";
	if ( (!Number.isInteger(int1) || !Number.isInteger(int2)) ) return "ERROR";
	if (int1 == NaN || int2 == NaN) return "ERROR";
	let totalSum = 0;
	// if positive ints

	if (int1 > int2) {
		for (let i = int1; i >= int2 ; --i) {
			totalSum += i;
		}
	} else if (int1 < int2) {
		for (let i = int1 ; i <= int2 ; ++i) {
			totalSum += i;
		}
	} else { // int1 is equal to int2
		totalSum = (int1+int2);
	}
	return totalSum;
}
// Do not edit below this line
module.exports = sumAll;
