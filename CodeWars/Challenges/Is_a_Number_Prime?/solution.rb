# Is a Number Prime?
def isPrime(num)
    if num <= 2
      return false
    end
    
    for i in 2..(num - 1)
      if (num % i) == 0
      return false
      end
    end
    return true
end
  
isPrime(1)
isPrime(0)
isPrime(-1)
