function toCamelCase(str){
  
    let regex = /[A-Za-z]+/g;
    let match;
    let array = [];
    while (match = regex.exec(str)) {
      array.push(match[0]);
    }
    
    array.forEach(function (element, index) {
        if (index != 0) {
          array[index] = element[0].toUpperCase() + element.substr(1);
        }
    });
    return array.join('');
}
  
toCamelCase("the-stealth-warrior");
toCamelCase("The_Stealth_Warrior");