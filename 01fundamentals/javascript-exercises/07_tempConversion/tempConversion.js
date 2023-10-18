const convertToCelsius = function(fahr) {
  let convertToCel = (fahr - 32) * 5/9;
  if (Math.round(convertToCel) !== convertToCel) {
    return convertToCel.toFixed(1)
  } else {
    return convertToCel
  }
};

const convertToFahrenheit = function(cel) {
  let convertToFah = (cel * 9/5) + 32;
  if (Math.round(convertToFah) !== convertToFah) {
    return convertToFah.toFixed(1)
  } else {
    return convertToFah
  }
};

// const convertToFahrenheit = (cel) => ((cel * 9/5) + 32).toFixed(1).replace(/[.,]0$/, "")

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
