// Replace with alphabet position

function alphabetPosition(text) {

    let result = "";
    
    for (let i = 0; i < text.length; i++) {
      let code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
    
    return result.slice(0, result.length - 1);
}
  
alphabetPosition("The sunset sets at twelve o' clock.");
alphabetPosition("The narwhal bacons at midnight.");
