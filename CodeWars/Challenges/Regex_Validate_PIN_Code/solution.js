// Regex validate PIN code
function validatePIN(pin) {
    if (/^(\d{4}|\d{6})$/.test(pin)) {
      return true;
    } else {
      return false;
    }
}
  
validatePIN("1234");
validatePIN("12345");
validatePIN("a234");
