const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedString.split("").reverse().join("") == processedString;
};
console.log(palindromes("hannah"));
// Do not edit below this line
module.exports = palindromes;
