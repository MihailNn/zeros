module.exports = function getZerosCount(number) {
  let zerosCount = Math.floor(number/5);
  for(let n = 2, i = Math.pow(5, n); i <= number; n++, i = Math.pow(5, n)) {
    zerosCount += Math.floor(number / i);
  }
  return zerosCount;
  // your implementation
}
