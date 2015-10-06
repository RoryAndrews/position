/**
 * Created by Rory on 9/23/2015.
 */

var testlist = [1, 3, 5, 6];

function position(list, target) {
  for(var i = 0; i < list.length; i++) {
    if(list[i] >= target) {
      return i;
    }
  }
  return list.length;
}

function binaryPosition(list, target) {
  var mid = Math.floor((list.length) / 2);
  console.log("MID: " + mid);
  if(list[mid] >= target) {
    if(mid = 0) {
      return mid;
    }
    else {
      return Math.min(mid, binaryPosition(list.slice(0, mid)));
    }
  }
  else {
    if (mid + 1 != list.length) {
      return mid + 1 + binaryPosition(list.slice(mid + 1, list.length));
    }
  }
}

console.log(binaryPosition(testlist, 5));
console.log(binaryPosition(testlist, 2));
console.log(binaryPosition(testlist, 7));
console.log(binaryPosition(testlist, 0));