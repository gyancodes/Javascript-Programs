const reverse = function(num) {
    let result = 0;
    while (num !== 0) {
      result = result * 10 + num % 10;
      // Math.trunc() method will remove the fractional part of the number and keep only the integer part
      num = Math.trunc(num / 10);
    }
if (result > 2**31 || result < -(2**31)) return 0;
    return result;
};