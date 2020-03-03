// Build a pile of cubes

function findNb(m) {
    
    for (let n = 0; ; n++) {
      if (m > 0) {
      let currentCubeVolume = Math.pow(n + 1, 3);
      m = m - currentCubeVolume;
      } else if (m == 0) {
        return n;
      } else if (m < 0) {
        return (-1);
      }
   }
}

findNb(1071225);
findNb(91716553919377);
