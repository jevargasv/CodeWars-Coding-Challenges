// Is a Number Prime?
function isPrime(num) {
    if (num <= 2) {
      return false;
    }
  
    for (let i = 2; i < num.length; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    
    return true;
  
  }
  
isPrime(1);
isPrime(0);
isPrime(-1);
