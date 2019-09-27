function isIsogram(string) {
    let lowerCase = string.toLowerCase();
    
    for (let i = 0; i < lowerCase.length; i++) {
      for (let j = 0; j < lowerCase.length; j++) {
        if (lowerCase[i] === lowerCase[j]) {
          return false;
        }
      } 
    }
  
    return true;
  
  }
  
isIsogram("Dermaoglyphics")
isIsogram("aba")
isIsogram("moOse")