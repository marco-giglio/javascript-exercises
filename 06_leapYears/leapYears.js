const leapYears = function(year) {

    // Year divisible by 4 returns true
    // Year divisible by 100 return false unless also divisible by 400

    if (((year % 100 === 0) && (year % 400 === 0) ) || ((year % 4 === 0) && (year % 100 != 0))) {
       return true
    }

    return false
};

// Do not edit below this line
module.exports = leapYears;