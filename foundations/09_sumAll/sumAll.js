const sumAll = function(a, b) {
    if (a < 0 || b < 0){
        return 'ERROR';
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        return 'ERROR';
    }
    let smallNum = a;
    let largeNum = b;
    if (smallNum === largeNum) {return smallNum;}
    if (b < a){
        smallNum = b;
        largeNum = a;
    }
    let sum = 0;
    for (let i = smallNum; i <= largeNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
