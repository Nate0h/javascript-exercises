const repeatString = function(string, num) {
let output = '';
let i = 0;
if (num < 0){
    return 'ERROR'
}
    while(i < num){
    output += string;
    i++
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
