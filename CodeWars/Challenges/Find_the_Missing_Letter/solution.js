// Find the missing letter

function findMissingLetter(array) {

    let string = "abcdefghijklmnopqrstuvwxyz";
    let stringToArray = array.join("");
    for (let i = 0; i < stringToArray.length; i++) {
      if (stringToArray.charCodeAt(i + 1) - stringToArray.charCodeAt(i) != 1) {
      return String.fromCharCode(stringToArray.charCodeAt(i) + 1);
      }
      
    }
    
}
  
findMissingLetter(['a','b','c','d','f']);
findMissingLetter(['O','Q','R','S']);
