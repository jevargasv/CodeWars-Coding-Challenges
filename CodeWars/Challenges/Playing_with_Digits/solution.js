// Playing with digits
function digPow(n, p) {

    let digits = n.toString().split('');
    let result = 0;
    
    for (let i = 0; i < digits.length; i++) {
      result = result + Math.pow(digits[i], p);
      p++;
    }
    
    let data = result / n;
    if(result % n === 0) {
      return data;
    } else {
      return -1;
    }
}
  
digPow((89, 1), 1);
digPow((92, 1), -1);
digPow((695, 2), 2);
digPow((46288, 3), 51);
