const leapYears = function(year) {
    if (year % 4 != 0 ) {
        return false;
    } else if (year % 100 == 0 && year % 400 == 0) {
        return true;
    } else if (year % 100 ==0) {
        return false;
    } else { return true }

};

console.log(leapYears(2004));

// Do not edit below this line
module.exports = leapYears;
