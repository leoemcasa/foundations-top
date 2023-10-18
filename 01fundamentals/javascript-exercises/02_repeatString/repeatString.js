const repeatString = function(string, num) {
    let stringSum = string;
    for (let i = 1; i < num; i++) {
        stringSum += string;
    }
    return stringSum;
};

console.log(repeatString("ok", 6));

// Do not edit below this line
module.exports = repeatString;
