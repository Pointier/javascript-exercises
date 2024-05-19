const removeFromArray = function(array, ...toDelete) {
  for (const arg in toDelete) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === toDelete[arg]) {
        array.splice(i, 1);
        i--;
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
