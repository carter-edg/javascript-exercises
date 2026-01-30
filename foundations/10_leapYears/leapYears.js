const leapYears = function(year) {
    let isYearDivisibleByFour = year % 4 === 0
    let isYearCentury = year % 100 === 0
    let isYearDivisibleByFourHundredHundred = year % 400 === 0
    return (isYearDivisibleByFourHundredHundred || (!isYearCentury && isYearDivisibleByFour));
};

// Do not edit below this line
module.exports = leapYears;
