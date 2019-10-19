// Find the Unique Number
function findUniq(array) {
  
    let result = [];
    console.log(array);
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i + 1] || array[i] === array[i - 1] || array[i] === array[i + 2]) {
      } else {
        return array[i];
      }
    }
    
    console.log(result);
    
}
  
findUniq([0, 1, 0]);
findUniq([1, 1, 1, 2, 1, 1]);
