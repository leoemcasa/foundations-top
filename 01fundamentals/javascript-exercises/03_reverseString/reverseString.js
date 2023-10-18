const reverseString = function(string) {
    let reverse = "";
    for (let i =  string.length -1 ; i > -1; i--) {
        reverse = reverse.concat(string[i]);
    }
    return reverse
};

console.log(reverseString("odranoel"));

// Do not edit below this line
module.exports = reverseString;
