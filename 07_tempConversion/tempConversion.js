const convertToCelsius = function(far) {
let celsius = (far - 32) * 5/9;
let num = Math.round(celsius * 10) / 10
return num;
};

const convertToFahrenheit = function(celsius) {
  let far = (celsius * 9/5) + 32;
let num = Math.round(far * 10) / 10;
return num;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
