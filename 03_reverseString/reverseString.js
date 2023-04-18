const reverseString = function(string) {
let my_array = string.split("");
my_array.reverse();
let output = my_array.join("");
return output;
};

// Do not edit below this line
module.exports = reverseString;
