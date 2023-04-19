const sumAll = function(num1, num2) {
let sum = 0;
let lo,hi;
if(num1 < 0 || num2 < 0){
    return "ERROR";
}

if(typeof num1 != "number" || typeof num2 != "number" ){
    return "ERROR"
}
if(num1 < num2){
     lo = num1;
     hi = num2;
}
else if(num2 < num1){
     lo = num2;
     hi = num1;
}

while(lo <= hi){
    sum += lo;
    lo++;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
