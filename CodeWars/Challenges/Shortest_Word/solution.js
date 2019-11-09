// Shortest word

function findShort(s){

    let array = s.split(' ');
    console.log(array);
    
    let shortest = array[0].length;
    
    for(let i = 0; i < array.length; i++) {
      if(shortest > array[i].length) {
        shortest = array[i].length;
      }
    }
    return shortest;
}
  
findShort(("bitcoin take over the world maybe who knows perhaps"), 3);
findShort(("turns out random test cases are easier than writing out basic ones"), 3);
