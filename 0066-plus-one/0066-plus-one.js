/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let numberString = "";
    for(let num of digits) {
        numberString = numberString + num.toString();
    }
    let number = BigInt(numberString);
    number++;
    let result = Array.from(String(number), Number);
    return result;
};