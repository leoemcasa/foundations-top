// const sumAll = function() {

// };
const sumAll = function(integer1, integer2) {
    let sum = 0;
    for (let i = integer1; i <= integer2; i++) {
        sum += i;
    }
    return sum;
};
console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
