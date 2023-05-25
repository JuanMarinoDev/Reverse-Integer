const reverse = function(num) {
  let str = num.toString();
  let isNegative = false;
  let revNum = "";
  str = str.split('');
  str.reverse();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '-') {
      revNum = revNum.concat(str[i]);
    } else {
      isNegative = true;
    }
  }
  if (isNegative === true) {
    revNum = '-' + revNum;
  }
  revNum = parseInt(revNum);
  if (revNum < -2147483648 || revNum > 2147483647) {
    revNum = 0;
  }
  return revNum;
};




















//
