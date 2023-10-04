
// function removeFromArray(array, value) {
//     return array.filter(function (num) {
//         return num != value;
//     })
// }
function removeFromArray(array, value) {
    return array.filter((num) => num != value)
}
console.log(removeFromArray([1, 2, 3], 3));

// Do not edit below this line
module.exports = removeFromArray;
