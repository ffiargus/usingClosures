var rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

function makeLoadedDie(){
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var i = -1;

  return function() {
    /* your code here */
    i++;
    return list[i];
  }

}

// console.log(rollDie());  // 1 (for example)

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6